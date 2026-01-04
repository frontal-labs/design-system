#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal/typeface
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

	console.log(`Building @frontal/typeface${minify ? " (minified)" : ""}...`);

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
