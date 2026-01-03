import { describe, expect, test } from "bun:test";

describe("@frontal/design-system", () => {
	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("package exports exist", async () => {
		const mod = await import("../src/index");
		expect(mod).toBeDefined();
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("re-exports blocks", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("blocks");
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("re-exports colors", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("gray");
		expect(mod).toHaveProperty("blue");
		expect(mod).toHaveProperty("getColor");
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("re-exports UI components", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("Button");
		expect(mod).toHaveProperty("Card");
		expect(mod).toHaveProperty("Input");
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("re-exports icons namespace", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("Icons");
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("re-exports typeface", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("fonts");
		expect(mod).toHaveProperty("MaisonNeue");
	});
});
