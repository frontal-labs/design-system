// scripts/generate-icons.js

import fs from "node:fs";
import path from "node:path";
import { transform } from "@svgr/core";

const iconsDir = path.resolve(process.cwd(), "icons");
const outDir = path.resolve(process.cwd(), "src", "components");

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir, { recursive: true });
}

// Recursively find all SVG files
function findSvgFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			findSvgFiles(filePath, fileList);
		} else if (file.endsWith(".svg")) {
			fileList.push(filePath);
		}
	}

	return fileList;
}

const svgFiles = findSvgFiles(iconsDir);
const exports = [];
const componentExports = [];
const componentNameCounts = {};

// Helper function to generate aria-label from component name or metadata
function generateAriaLabel(componentName, metadata) {
	// If metadata has tags, try to build a descriptive label from tags
	if (metadata?.tags && metadata.tags.length > 0) {
		// Filter out generic tags and use descriptive ones
		const meaningfulTags = metadata.tags.filter(
			(tag) => !["icon", "ui", "outline", "simple"].includes(tag.toLowerCase()),
		);

		if (meaningfulTags.length > 0) {
			// Use the first few meaningful tags to build a descriptive label
			// Limit to 3 tags to avoid overly long labels
			const tagsToUse = meaningfulTags.slice(0, 3);
			return tagsToUse
				.map((tag) =>
					tag
						.split(/[-_\s]/)
						.map(
							(word) =>
								word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
						)
						.join(" "),
				)
				.join(" ");
		}
	}
	// Fallback: convert PascalCase to readable format
	return componentName
		.replace(/Icon$/, "")
		.replace(/([A-Z])/g, " $1")
		.trim();
}

// Custom SVGR template for simplified component format
const template = (_api, opts, values) => {
	const { componentName } = opts;
	const metadata = opts.metadata || null;
	let { jsx } = values;

	// Remove title elements
	jsx = jsx.replace(/<title[^>]*>.*?<\/title>/gi, "");

	// Clean the SVG tag - extract only viewBox and xmlns
	jsx = jsx.replace(/<svg\s*([^>]*)>/g, (_match, attrs) => {
		const viewBoxMatch = attrs.match(/viewBox\s*=\s*(["'][^"']*["'])/i);
		const xmlnsMatch = attrs.match(/xmlns\s*=\s*(["'][^"']*["'])/i);

		const safeAttrs = [];
		if (viewBoxMatch) {
			safeAttrs.push(`viewBox=${viewBoxMatch[1]}`);
		}
		if (xmlnsMatch) {
			safeAttrs.push(`xmlns=${xmlnsMatch[1]}`);
		}

		const safeAttrsStr = safeAttrs.length > 0 ? ` ${safeAttrs.join(" ")}` : "";
		return `<svg${safeAttrsStr}>`;
	});

	// Generate aria-label using metadata if available
	const ariaLabel = generateAriaLabel(componentName, metadata);

	return `import type { SVGProps } from 'react';

export function ${componentName}({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-label="${ariaLabel}"
      aria-labelledby="${ariaLabel}"
      aria-hidden={true}
      {...props}
    >
      ${jsx
				.replace(/<svg[^>]*>/, "")
				.replace(/<\/svg>/, "")
				.trim()}
    </svg>
  );
}

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
};

for (const filePath of svgFiles) {
	const svgContent = fs.readFileSync(filePath, "utf-8");

	// Get relative path from icons/ directory
	const relativePath = path.relative(iconsDir, filePath);
	// Force lowercase and convert spaces/special chars to kebab-case for directory names
	const dirName = path
		.dirname(relativePath)
		.toLowerCase()
		.replace(/\s*&\s*/g, "-")
		.replace(/\s+/g, "-");
	const baseName = path.basename(filePath, ".svg");

	// Read JSON file if it exists
	let iconMetadata = null;
	const jsonPath = path.join(path.dirname(filePath), `${baseName}.json`);
	if (fs.existsSync(jsonPath)) {
		try {
			const jsonContent = fs.readFileSync(jsonPath, "utf-8");
			iconMetadata = JSON.parse(jsonContent);
		} catch (error) {
			console.warn(`⚠️  Failed to parse JSON for ${baseName}: ${error.message}`);
		}
	}

	// Convert file name to PascalCase + Icon suffix for component name
	let componentName = `${baseName
		.split(/[-_\s]/)
		.map((p) => {
			// If part starts with a number, prefix with underscore
			if (/^\d/.test(p)) {
				return `_${p}`;
			}
			return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
		})
		.join("")}Icon`;

	// If the entire component name starts with a number, prefix with underscore
	if (/^\d/.test(componentName)) {
		componentName = `_${componentName}`;
	}

	// Track component names to handle duplicates
	if (componentNameCounts[componentName]) {
		componentNameCounts[componentName]++;
		componentName = `${componentName}_${componentNameCounts[componentName]}`;
	} else {
		componentNameCounts[componentName] = 1;
	}

	// Convert to kebab-case for filename
	const fileName = `${baseName}-icon`;

	// SVGR transform with template (pass metadata if available)
	let tsx = transform.sync(
		svgContent,
		{
			icon: false,
			typescript: true,
			jsx: "react",
			replaceAttrValues: { "#000": "currentColor" },
			prettier: false,
			template,
		},
		{ componentName, metadata: iconMetadata },
	);

	// If transform returned raw SVG, manually create the component
	if (tsx.trim().startsWith("<svg") && !tsx.includes("export function")) {
		// Extract viewBox and xmlns from the SVG
		const viewBoxMatch = tsx.match(/viewBox\s*=\s*(["'][^"']*["'])/i);
		const xmlnsMatch = tsx.match(/xmlns\s*=\s*(["'][^"']*["'])/i);

		// Extract the inner content (everything between <svg> and </svg>)
		const innerContent = tsx
			.replace(/<svg[^>]*>/, "")
			.replace(/<\/svg>/, "")
			.replace(/<title[^>]*>.*?<\/title>/gi, "")
			.trim();

		// Generate aria-label using metadata if available
		const ariaLabel = generateAriaLabel(componentName, iconMetadata);

		const viewBox = viewBoxMatch ? viewBoxMatch[1] : '"0 0 24 24"';
		const xmlns = xmlnsMatch ? xmlnsMatch[1] : '"http://www.w3.org/2000/svg"';

		tsx = `import type { SVGProps } from 'react';

export function ${componentName}({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns=${xmlns}
      viewBox=${viewBox}
      width={width}
      height={height}
      fill={color}
      aria-label="${ariaLabel}"
      aria-labelledby="${ariaLabel}"
      aria-hidden={true}
      {...props}
    >
      ${innerContent
				.split("\n")
				.map((line) => `      ${line.trim()}`)
				.join("\n")
				.trim()}
    </svg>
  );
}

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
	}

	// Final cleanup: ensure proper formatting
	tsx = tsx.replace(/\n{3,}/g, "\n\n"); // Remove excessive newlines

	// Preserve directory structure in components folder
	const componentDir = path.join(outDir, dirName);
	if (!fs.existsSync(componentDir)) {
		fs.mkdirSync(componentDir, { recursive: true });
	}

	// Write component file with kebab-case filename
	const outPath = path.join(componentDir, `${fileName}.tsx`);
	fs.writeFileSync(outPath, tsx);

	// Export line for main index.ts (use @components path alias with kebab-case filename)
	const exportPath =
		dirName === "."
			? `./components/${fileName}`
			: `./components/${dirName}/${fileName}`;
	exports.push(`export { default as ${componentName} } from '${exportPath}';`);

	// Export line for components/index.ts (relative path with kebab-case filename)
	const componentExportPath =
		dirName === "." ? `./${fileName}` : `./${dirName}/${fileName}`;
	componentExports.push(
		`export { default as ${componentName} } from '${componentExportPath}';`,
	);
}

// Generate index.ts that re-exports all icons
const indexPath = path.resolve(process.cwd(), "src", "index.ts");
const indexContent = `// @frontal/icons
// Icon library for the Frontal design system

// Export utilities, helpers, and types
export * from './types';
export * from './utils';
export * from './helpers';

// Export all icon components
${exports.join("\n")}

`;

fs.writeFileSync(indexPath, indexContent);

// Generate components/index.ts that re-exports all icon components
const componentsIndexPath = path.resolve(
	process.cwd(),
	"src",
	"components",
	"index.ts",
);
const componentsIndexContent = `// @frontal/icons - Components index
// Auto-generated file - do not edit manually

${componentExports.join("\n")}

`;

fs.writeFileSync(componentsIndexPath, componentsIndexContent);

console.log(`✅ Generated ${svgFiles.length} icon components`);
console.log("✅ Generated components/index.ts");
