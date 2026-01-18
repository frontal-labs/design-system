#!/usr/bin/env bun
/// <reference types="bun-types" />
/**
 * Build script for @frontal-labs/typeface
 * Uses Bun's native bundler API
 * @see https://bun.com/docs/bundler
 */

const _entrypoint = "./src/index.ts";
const _minify =
  process.argv.includes("--minify") || process.argv.includes("--bundle");

async function build() {
  const { existsSync, mkdirSync } = await import("node:fs");
  if (!existsSync("./dist")) {
    mkdirSync("./dist", { recursive: true });
  }

  // Generate JavaScript and TypeScript declarations using tsc
  // We use tsc instead of Bun.build to preserve 'const' for Next.js font loaders
  // biome-ignore lint/correctness/noUndeclaredVariables: Bun is a global in Bun runtime
  const tscProcess = Bun.spawn(["tsc", "--project", "tsconfig.build.json"], {
    stdout: "inherit",
    stderr: "inherit",
  });

  const tscExitCode = await tscProcess.exited;
  if (tscExitCode !== 0) {
    process.exit(1);
  }

  // Copy CSS files to dist/styles
  const { cpSync } = await import("node:fs");
  if (!existsSync("./dist/styles")) {
    mkdirSync("./dist/styles", { recursive: true });
  }
  cpSync("./src/styles/fonts.css", "./dist/styles/fonts.css");
  cpSync("./src/styles/styles.css", "./dist/styles/styles.css");
}

build().catch((_error) => {
  process.exit(1);
});
