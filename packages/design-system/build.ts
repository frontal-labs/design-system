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
  // biome-ignore lint/suspicious/noConsole: Build scripts need console output
  console.log(
    `Building @frontal/design-system${minify ? " (minified)" : ""}...`
  );

  // Build ESM format
  // Bundle @frontal/* packages but keep React and other runtime deps external
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
  const esmResult = await Bun.build({
    entrypoints: [entrypoint],
    outfile: "./dist/index.js",
    format: "esm",
    target: "bun",
    sourcemap: "linked",
    packages: "external", // Externalize all dependencies
    minify,
  });

  if (!esmResult.success) {
    // biome-ignore lint/suspicious/noConsole: Build scripts need error output
    console.error("ESM build failed:");
    for (const log of esmResult.logs) {
      // biome-ignore lint/suspicious/noConsole: Build scripts need error output
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
    const esmWithDirective = `"use client";\n${esmContent}`;
    // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
    await Bun.write("./dist/index.js", esmWithDirective);
  }

  // Build CJS format
  // Bundle @frontal/* packages but keep React and other runtime deps external
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
  const cjsResult = await Bun.build({
    entrypoints: [entrypoint],
    outfile: "./dist/index.cjs",
    format: "cjs",
    target: "bun",
    sourcemap: "linked",
    packages: "external", // Bundle all @frontal/* dependencies
    minify,
  });

  if (!cjsResult.success) {
    // biome-ignore lint/suspicious/noConsole: Build scripts need error output
    console.error("CJS build failed:");
    for (const log of cjsResult.logs) {
      // biome-ignore lint/suspicious/noConsole: Build scripts need error output
      console.error(log);
    }
    process.exit(1);
  }

  // Ensure CJS file is written
  if (cjsResult.outputs.length > 0) {
    const cjsOutput = cjsResult.outputs[0];
    // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
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
    // biome-ignore lint/suspicious/noConsole: Build scripts need console output
    console.log("✓ CSS files copied");
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
    // biome-ignore lint/suspicious/noConsole: Build scripts need error output
    console.error("TypeScript declaration generation failed");
    process.exit(1);
  }

  // biome-ignore lint/suspicious/noConsole: Build scripts need console output
  console.log("✓ Build completed successfully");
}

build().catch((error) => {
  // biome-ignore lint/suspicious/noConsole: Build scripts need error output
  console.error("Build error:", error);
  process.exit(1);
});
