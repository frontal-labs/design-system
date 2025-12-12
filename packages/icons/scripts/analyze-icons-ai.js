#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOllama } from "@langchain/ollama";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "gpt-oss:20b";
const ICONS_DIR = path.resolve(__dirname, "../icons");
const RENAME_REPORT_PATH = path.resolve(
	__dirname,
	"../rename-suggestions.json",
);
const BATCH_SIZE = 5; // Process icons in batches to avoid overwhelming the model
const DELAY_BETWEEN_BATCHES = 1000; // 1 second delay between batches

// Initialize Ollama
let llm;
try {
	llm = new ChatOllama({
		baseUrl: OLLAMA_BASE_URL,
		model: OLLAMA_MODEL,
		temperature: 0.7,
	});
	console.log(
		`✅ Connected to Ollama at ${OLLAMA_BASE_URL} with model ${OLLAMA_MODEL}`,
	);
} catch (error) {
	console.error("❌ Failed to initialize Ollama:", error.message);
	process.exit(1);
}

// Recursively find all SVG files
function findSvgFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			findSvgFiles(filePath, fileList);
		} else if (file.endsWith(".svg")) {
			const relativePath = path.relative(ICONS_DIR, filePath);
			const category = path.dirname(relativePath);
			const baseName = path.basename(file, ".svg");

			fileList.push({
				path: filePath,
				relativePath,
				category: category === "." ? "root" : category,
				baseName,
				fileName: file,
			});
		}
	});

	return fileList;
}

// Read SVG content
function readSvgContent(filePath) {
	try {
		return fs.readFileSync(filePath, "utf-8");
	} catch (error) {
		console.error(`❌ Failed to read ${filePath}:`, error.message);
		return null;
	}
}

// Sleep utility for batching
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Rename Agent: Analyze icons with -s- or -2- and suggest better names
async function analyzeRenameSuggestions(svgFiles) {
	console.log("\n🔍 Starting Rename Agent...");
	const iconsToRename = svgFiles.filter(
		(file) => file.baseName.includes("-s-") || file.baseName.includes("-2-"),
	);

	if (iconsToRename.length === 0) {
		console.log("✅ No icons found with -s- or -2- in their names");
		return [];
	}

	console.log(`📝 Found ${iconsToRename.length} icons to analyze for renaming`);

	const suggestions = [];

	for (let i = 0; i < iconsToRename.length; i++) {
		const icon = iconsToRename[i];
		console.log(
			`\n[${i + 1}/${iconsToRename.length}] Analyzing: ${icon.fileName}`,
		);

		try {
			const svgContent = readSvgContent(icon.path);
			if (!svgContent) continue;

			// Get similar icons in the same category for context
			const similarIcons = svgFiles
				.filter(
					(f) =>
						f.category === icon.category &&
						f.baseName !== icon.baseName &&
						f.baseName.startsWith(icon.baseName.split("-")[0]),
				)
				.slice(0, 5)
				.map((f) => f.baseName);

			const prompt = `You are an expert at analyzing icon names and suggesting better, more descriptive names.

Analyze this SVG icon and suggest a better name based on its visual content.

Current icon name: ${icon.baseName}
Category: ${icon.category}
Similar icons in category: ${similarIcons.join(", ") || "none"}

SVG content:
${svgContent}

The current name contains "-s-" or "-2-" which is not descriptive. Based on the actual visual content of the SVG, suggest a better name that:
1. Describes what the icon actually shows
2. Follows kebab-case naming convention
3. Is more descriptive than the current name
4. Makes sense in the context of similar icons

Respond with ONLY a JSON object in this exact format (no markdown, no explanation):
{
  "suggestedName": "new-icon-name",
  "reasoning": "Brief explanation of why this name is better based on the visual content"
}`;

			const response = await llm.invoke([
				new SystemMessage(
					"You are a helpful assistant that analyzes icon names and suggests better alternatives. Always respond with valid JSON only.",
				),
				new HumanMessage(prompt),
			]);

			const responseText = response.content.trim();
			// Extract JSON from response (handle markdown code blocks if present)
			const jsonMatch = responseText.match(/\{[\s\S]*\}/);
			if (jsonMatch) {
				const result = JSON.parse(jsonMatch[0]);
				suggestions.push({
					currentName: icon.fileName,
					suggestedName: `${result.suggestedName}.svg`,
					category: icon.category,
					reasoning: result.reasoning || "No reasoning provided",
				});
				console.log(`  ✓ Suggested: ${result.suggestedName}.svg`);
			} else {
				console.log(`  ⚠️  Failed to parse response for ${icon.fileName}`);
			}
		} catch (error) {
			console.error(`  ❌ Error analyzing ${icon.fileName}:`, error.message);
		}

		// Small delay to avoid overwhelming the model
		if (i < iconsToRename.length - 1) {
			await sleep(500);
		}
	}

	return suggestions;
}

// Metadata Agent: Analyze each SVG and generate JSON metadata
async function generateMetadataFiles(svgFiles) {
	console.log("\n📊 Starting Metadata Agent...");
	console.log(`📝 Processing ${svgFiles.length} icons...`);

	let processed = 0;
	let errors = 0;

	// Process in batches
	for (let i = 0; i < svgFiles.length; i += BATCH_SIZE) {
		const batch = svgFiles.slice(i, i + BATCH_SIZE);
		console.log(
			`\n📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(svgFiles.length / BATCH_SIZE)} (${batch.length} icons)`,
		);

		// Process batch in parallel
		const batchPromises = batch.map(async (icon) => {
			try {
				const svgContent = readSvgContent(icon.path);
				if (!svgContent) {
					errors++;
					return;
				}

				// Check if JSON already exists (we'll overwrite per requirements)
				const jsonPath = path.join(
					path.dirname(icon.path),
					`${icon.baseName}.json`,
				);

				console.log(`  🔍 Analyzing: ${icon.fileName}`);

				const prompt = `You are an expert at analyzing SVG icons and generating metadata.

Analyze this SVG icon and generate appropriate metadata.

Icon name: ${icon.baseName}
Category folder: ${icon.category}

SVG content:
${svgContent}

Generate metadata for this icon:
1. Tags: 5-10 relevant tags that describe the icon (e.g., "arrow", "down", "direction", "navigation", "pointer")
2. Categories: 1-2 categories that this icon belongs to (use lowercase, plural form like "arrows", "navigation", "design")

Respond with ONLY a JSON object in this exact format (no markdown, no explanation):
{
  "tags": ["tag1", "tag2", "tag3"],
  "categories": ["category1", "category2"]
}`;

				const response = await llm.invoke([
					new SystemMessage(
						"You are a helpful assistant that analyzes icons and generates metadata. Always respond with valid JSON only.",
					),
					new HumanMessage(prompt),
				]);

				const responseText = response.content.trim();
				// Extract JSON from response
				const jsonMatch = responseText.match(/\{[\s\S]*\}/);
				if (jsonMatch) {
					const metadata = JSON.parse(jsonMatch[0]);

					// Calculate relative path to icon.schema.json at project root
					// JSON file is at: packages/icons/icons/{category}/{icon}.json
					// Schema is at: icon.schema.json (project root)
					const jsonDir = path.dirname(jsonPath);
					const schemaPath = path.resolve(
						__dirname,
						"../../../icon.schema.json",
					);
					const relativeSchemaPath = path.relative(jsonDir, schemaPath);

					// Create the final JSON structure
					const jsonData = {
						$schema: relativeSchemaPath,
						tags: metadata.tags || [],
						categories: metadata.categories || [],
					};

					// Write JSON file
					fs.writeFileSync(jsonPath, `${JSON.stringify(jsonData, null, 2)}\n`);
					processed++;
					console.log(`  ✓ Generated: ${icon.baseName}.json`);
				} else {
					console.log(`  ⚠️  Failed to parse response for ${icon.fileName}`);
					errors++;
				}
			} catch (error) {
				console.error(`  ❌ Error processing ${icon.fileName}:`, error.message);
				errors++;
			}
		});

		await Promise.all(batchPromises);

		// Delay between batches
		if (i + BATCH_SIZE < svgFiles.length) {
			await sleep(DELAY_BETWEEN_BATCHES);
		}
	}

	console.log(`\n✅ Metadata generation complete!`);
	console.log(`   Processed: ${processed}`);
	console.log(`   Errors: ${errors}`);
}

// Main execution
async function main() {
	console.log("🚀 Starting AI Icon Analysis Script");
	console.log("=".repeat(50));

	// Check if icons directory exists
	if (!fs.existsSync(ICONS_DIR)) {
		console.error(`❌ Icons directory not found: ${ICONS_DIR}`);
		process.exit(1);
	}

	// Find all SVG files
	console.log("\n📂 Scanning for SVG files...");
	const svgFiles = findSvgFiles(ICONS_DIR);
	console.log(`✅ Found ${svgFiles.length} SVG files`);

	if (svgFiles.length === 0) {
		console.log("⚠️  No SVG files found. Exiting.");
		process.exit(0);
	}

	try {
		// Run Rename Agent
		const renameSuggestions = await analyzeRenameSuggestions(svgFiles);

		// Save rename suggestions
		if (renameSuggestions.length > 0) {
			const report = {
				generatedAt: new Date().toISOString(),
				totalSuggestions: renameSuggestions.length,
				suggestions: renameSuggestions,
			};
			fs.writeFileSync(
				RENAME_REPORT_PATH,
				`${JSON.stringify(report, null, 2)}\n`,
			);
			console.log(
				`\n✅ Rename suggestions saved to: ${path.relative(process.cwd(), RENAME_REPORT_PATH)}`,
			);
		}

		// Run Metadata Agent
		await generateMetadataFiles(svgFiles);

		console.log(`\n${"=".repeat(50)}`);
		console.log("🎉 All tasks completed successfully!");
	} catch (error) {
		console.error("\n❌ Fatal error:", error);
		process.exit(1);
	}
}

// Run the script
main().catch((error) => {
	console.error("❌ Unhandled error:", error);
	process.exit(1);
});
