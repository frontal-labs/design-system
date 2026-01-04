#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal/design-system
 * Uses Bun's native bundler API
 * @see https://bun.com/docs/bundler
 */

const entrypoint = "./src/index.ts";
const minify =
	process.argv.includes("--minify") || process.argv.includes("--bundle");

async function build() {
	console.log(
		`Building @frontal/design-system${minify ? " (minified)" : ""}...`,
	);

	// Build ESM format
	const esmResult = await Bun.build({
		entrypoints: [entrypoint],
		outfile: "./dist/index.js",
		format: "esm",
		target: "bun",
		sourcemap: "linked",
		packages: "external",
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
		await Bun.write("./dist/index.js", esmOutput);
	}

	// Build CJS format
	const cjsResult = await Bun.build({
		entrypoints: [entrypoint],
		outfile: "./dist/index.cjs",
		format: "cjs",
		target: "bun",
		sourcemap: "linked",
		packages: "external",
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

	// Copy CSS files to dist
	const { existsSync, mkdirSync, copyFileSync } = await import("node:fs");
	const { dirname } = await import("node:path");

	const cssSource = "./src/styles/globals.css";
	const cssDest = "./dist/styles/globals.css";

	if (existsSync(cssSource)) {
		const cssDestDir = dirname(cssDest);
		if (!existsSync(cssDestDir)) {
			mkdirSync(cssDestDir, { recursive: true });
		}
		copyFileSync(cssSource, cssDest);
		console.log("✓ CSS files copied");
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
