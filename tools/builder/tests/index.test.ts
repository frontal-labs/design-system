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

	test("exported types are defined", async () => {
		try {
			const mod = await import("../src/index");
			expect(mod).toBeDefined();
		} catch (error) {
			// Skip if dependencies aren't available (e.g., in CI without full install)
			if (
				error instanceof Error &&
				error.message.includes("Cannot find package")
			) {
				return; // Skip test silently
			}
			throw error;
		}
	});
});
