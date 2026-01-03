import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

describe("@frontal/builder", () => {
	test("source files exist", () => {
		expect(existsSync(resolve(import.meta.dir, "../src/index.ts"))).toBe(true);
		expect(existsSync(resolve(import.meta.dir, "../src/bundler.ts"))).toBe(
			true,
		);
		expect(existsSync(resolve(import.meta.dir, "../src/analyzer.ts"))).toBe(
			true,
		);
		expect(existsSync(resolve(import.meta.dir, "../src/cli.ts"))).toBe(true);
	});

	test.skipIf(
		// Skip test if dependencies might not be available in CI
		process.env.CI === "true",
	)("exported types are defined", async () => {
		const mod = await import("../src/index");
		expect(mod).toBeDefined();
	});
});
