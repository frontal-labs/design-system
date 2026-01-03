import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

describe("@frontal/generators", () => {
	test("source files exist", () => {
		expect(existsSync(resolve(import.meta.dir, "../src/index.ts"))).toBe(true);
		expect(
			existsSync(resolve(import.meta.dir, "../src/base/generator.ts")),
		).toBe(true);
		expect(
			existsSync(resolve(import.meta.dir, "../src/base/template.ts")),
		).toBe(true);
		expect(
			existsSync(resolve(import.meta.dir, "../src/generators/package.ts")),
		).toBe(true);
		expect(existsSync(resolve(import.meta.dir, "../src/cli.ts"))).toBe(true);
	});

	test("exported types are defined", async () => {
		const mod = await import("../src/index.ts");
		expect(mod).toBeDefined();
	});
});
