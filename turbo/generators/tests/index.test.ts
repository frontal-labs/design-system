// @ts-expect-error - Bun-specific module
import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

describe("@frontal/generators", () => {
  test("source files exist", () => {
    // @ts-expect-error - Bun-specific property
    expect(existsSync(resolve(import.meta.dir, "../src/index.ts"))).toBe(true);
    expect(
      // @ts-expect-error - Bun-specific property
      existsSync(resolve(import.meta.dir, "../src/base/generator.ts"))
    ).toBe(true);
    expect(
      // @ts-expect-error - Bun-specific property
      existsSync(resolve(import.meta.dir, "../src/base/template.ts"))
    ).toBe(true);
    expect(
      // @ts-expect-error - Bun-specific property
      existsSync(resolve(import.meta.dir, "../src/generators/package.ts"))
    ).toBe(true);
    // @ts-expect-error - Bun-specific property
    expect(existsSync(resolve(import.meta.dir, "../src/cli.ts"))).toBe(true);
  });

  test.skipIf(
    // Skip test if dependencies might not be available in CI
    process.env.CI === "true"
  )("exported types are defined", async () => {
    const mod = await import("../src/index.ts");
    expect(mod).toBeDefined();
  });
});
