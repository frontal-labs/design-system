#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal-labs/charts
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

  // Build ESM format
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
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
    // Logs are handled by stderr: "inherit" in spawn calls
    process.exit(1);
  }

  // Ensure ESM file is written
  if (esmResult.outputs.length > 0) {
    const esmOutput = esmResult.outputs[0];
    let esmContent = await esmOutput.text();

    // Remove existing "use client" directives to prevent them from appearing in the middle of the bundle
    esmContent = esmContent.replace(/^["']use client["'];?\s*$/gm, "");

    // Prepend "use client" directive since the bundle contains React client components
    const esmWithDirective = `"use client";\n${esmContent}`;
    // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
    await Bun.write("./dist/index.js", esmWithDirective);
  }

  // Build CJS format
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
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
    // Logs are handled by stderr: "inherit" in spawn calls
    process.exit(1);
  }

  // Ensure CJS file is written
  if (cjsResult.outputs.length > 0) {
    const cjsOutput = cjsResult.outputs[0];
    // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
    await Bun.write("./dist/index.cjs", cjsOutput);
  }

  // Generate TypeScript declarations
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
  const tscProcess = Bun.spawn(
    ["tsc", "--project", "tsconfig.declaration.json"],
    {
      stdout: "inherit",
      stderr: "inherit",
    }
  );

  const tscExitCode = await tscProcess.exited;
  if (tscExitCode !== 0) {
    process.exit(1);
  }

  // Copy CSS files to dist/styles
  const { cpSync } = await import("node:fs");
  if (!existsSync("./dist/styles")) {
    mkdirSync("./dist/styles", { recursive: true });
  }
  cpSync("./src/styles/styles.css", "./dist/styles/styles.css");
}

build().catch((_error) => {
  process.exit(1);
});
