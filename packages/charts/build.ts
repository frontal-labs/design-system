#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal/charts
 * Uses Bun's native bundler API
 * @see https://bun.com/docs/bundler
 */

const entrypoint = "./src/index.ts";
const minify =
	process.argv.includes("--minify") || process.argv.includes("--bundle");

async function build() {
	const { existsSync, mkdirSync } = await import("node:fs");
	if (!existsSync("./dist")) {
		mkdirSync("./dist", { recursive: true });
	}

	console.log(`Building @frontal/charts${minify ? " (minified)" : ""}...`);

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
