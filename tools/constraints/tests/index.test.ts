import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

describe("@frontal/constraints", () => {
	test("source files exist", () => {
		expect(existsSync(resolve(import.meta.dir, "../src/index.ts"))).toBe(true);
		expect(existsSync(resolve(import.meta.dir, "../src/rules.ts"))).toBe(true);
		expect(existsSync(resolve(import.meta.dir, "../src/cli.ts"))).toBe(true);
	});

	test("exported types are defined", async () => {
		const mod = await import("../src/index.ts");
		expect(mod).toBeDefined();
	});
});
