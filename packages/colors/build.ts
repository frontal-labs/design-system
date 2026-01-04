#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal/colors
 * Uses Bun's native bundler API
 * @see https://bun.com/docs/bundler
 */

const entrypoint = "./src/index.ts";
const minify =
	process.argv.includes("--minify") || process.argv.includes("--bundle");

async function build() {
	console.log(`Building @frontal/colors${minify ? " (minified)" : ""}...`);

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
	// Use skipLibCheck to avoid errors from missing dependency declarations
	// Set rootDir to src to only include files from this package
	const tscProcess = Bun.spawn(
		[
			"tsc",
			"--project",
			"tsconfig.json",
			"--emitDeclarationOnly",
			"--outDir",
			"dist",
			"--rootDir",
			"src",
			"--skipLibCheck",
			"--declaration",
			"--declarationMap",
		],
		{
			stdout: "inherit",
			stderr: "inherit",
		},
	);

	const tscExitCode = await tscProcess.exited;
	if (tscExitCode !== 0) {
		console.warn(
			"TypeScript declaration generation had errors (this may be expected if dependencies aren't built yet)",
		);
		// Don't exit on tsc errors - declarations may still be generated
		// The build itself succeeded, which is what matters for the bundler
	}

	console.log("✓ Build completed successfully");
}

build().catch((error) => {
	console.error("Build error:", error);
	process.exit(1);
});
