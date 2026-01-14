#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for root package
 * Uses Bun's native bundler API
 * @see https://bun.com/docs/bundler
 */

const entrypoint = "./index.ts";
const minify =
	process.argv.includes("--minify") || process.argv.includes("--bundle");

async function build() {
	console.log(
		`Building root package${minify ? " (minified)" : ""}...`,
	);
	console.log("Bundling workspace packages from source...");

	// Build ESM format
	// Bundle @frontal/* packages into the root bundle for git installation
	// Keep React and other runtime deps external
	const esmResult = await Bun.build({
		entrypoints: [entrypoint],
		outfile: "./dist/index.js",
		format: "esm",
		target: "bun",
		sourcemap: "linked",
		external: ["react", "react-dom", "react/jsx-runtime"], // Only externalize React
		minify,
	});

	if (!esmResult.success) {
		console.error("ESM build failed:");
		for (const log of esmResult.logs) {
			console.error(log);
		}
		process.exit(1);
	}

	// Ensure ESM file is written
	if (esmResult.outputs.length > 0) {
		const esmOutput = esmResult.outputs[0];
		let esmContent = await esmOutput.text();

		// Remove existing "use client" directives to prevent them from appearing in the middle of the bundle
		esmContent = esmContent.replace(/^["']use client["'];?\s*$/gm, "");

		// Prepend "use client" directive since the bundle contains React client components
		const esmWithDirective = '"use client";\n' + esmContent;
		await Bun.write("./dist/index.js", esmWithDirective);
	}

	// Build CJS format
	// Bundle @frontal/* packages into the root bundle for git installation
	// Keep React and other runtime deps external
	const cjsResult = await Bun.build({
		entrypoints: [entrypoint],
		outfile: "./dist/index.cjs",
		format: "cjs",
		target: "bun",
		sourcemap: "linked",
		external: ["react", "react-dom", "react/jsx-runtime"], // Only externalize React
		minify,
	});

	if (!cjsResult.success) {
		console.error("CJS build failed:");
		for (const log of cjsResult.logs) {
			console.error(log);
		}
		process.exit(1);
	}

	// Ensure CJS file is written
	if (cjsResult.outputs.length > 0) {
		const cjsOutput = cjsResult.outputs[0];
		await Bun.write("./dist/index.cjs", cjsOutput);
	}

	// Copy and process CSS files - bundle all CSS imports into a single file
	const { existsSync, mkdirSync, readFileSync, writeFileSync } = await import("node:fs");
	const { dirname, join, resolve } = await import("node:path");

	const cssSource = "./packages/design-system/src/styles/globals.css";
	const cssDest = "./dist/styles/globals.css";

	if (existsSync(cssSource)) {
		const cssDestDir = dirname(cssDest);
		if (!existsSync(cssDestDir)) {
			mkdirSync(cssDestDir, { recursive: true });
		}

		// Function to resolve and inline CSS imports
		function resolveCSSImports(content: string, baseDir: string): string {
			return content.replace(
				/@import\s+["']@frontal\/([^/]+)\/([^"']+)["'];?/g,
				(match, pkg, cssFile) => {
					// Map @frontal/package/styles.css to packages/package/src/styles/styles.css
					// or packages/package/src/styles/theme.css for theme.css
					const resolvedPath = resolve(process.cwd(), "packages", pkg, "src", "styles", cssFile);
					if (existsSync(resolvedPath)) {
						const importedContent = readFileSync(resolvedPath, "utf-8");
						// Recursively resolve imports in the imported file (handle relative imports like ./theme.css)
						const resolvedContent = resolveCSSImports(importedContent, dirname(resolvedPath));
						return `\n/* From @frontal/${pkg}/${cssFile} */\n${resolvedContent}\n`;
					}
					console.warn(`Warning: CSS file not found: ${resolvedPath}`);
					return `/* Missing: ${match} */\n`;
				}
			).replace(
				/@import\s+["']\.\/([^"']+)["'];?/g,
				(match, relPath) => {
					// Handle relative imports like ./theme.css
					const resolvedPath = resolve(baseDir, relPath);
					if (existsSync(resolvedPath)) {
						const importedContent = readFileSync(resolvedPath, "utf-8");
						const resolvedContent = resolveCSSImports(importedContent, dirname(resolvedPath));
						return `\n/* From ${relPath} */\n${resolvedContent}\n`;
					}
					return match;
				}
			);
		}

		// Read the main CSS file and resolve all imports
		let cssContent = readFileSync(cssSource, "utf-8");
		cssContent = `/* Frontal Design System - Global Styles */\n/* Bundled from all design system packages */\n\n${cssContent}`;
		cssContent = resolveCSSImports(cssContent, dirname(cssSource));

		writeFileSync(cssDest, cssContent);
		console.log("✓ CSS files bundled");
	}

	// Generate TypeScript declarations
	const tscProcess = Bun.spawn(
		["tsc", "--project", "tsconfig.declaration.json"],
		{
			stdout: "inherit",
			stderr: "inherit",
		},
	);

	const tscExitCode = await tscProcess.exited;
	if (tscExitCode !== 0) {
		console.error("TypeScript declaration generation failed");
		process.exit(1);
	}

	console.log("✓ Build completed successfully");
}

build().catch((error) => {
	console.error("Build error:", error);
	process.exit(1);
});
