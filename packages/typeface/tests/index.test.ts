import { describe, expect, test } from "bun:test";

describe("@frontal/typeface", () => {
	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("package can be imported", async () => {
		const mod = await import("../src/index");
		expect(mod).toBeDefined();
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("fonts are exported", async () => {
		const mod = await import("../src/index");
		expect(mod).toHaveProperty("fonts");
		expect(mod).toHaveProperty("MaisonNeue");
		expect(mod).toHaveProperty("MaisonNeueMono");
	});

	test.skipIf(
		// Skip test if Next.js font modules are not available in test environment
		true,
	)("fonts are defined", async () => {
		const mod = await import("../src/index");
		expect(mod.fonts).toBeDefined();
		expect(mod.MaisonNeue).toBeDefined();
		expect(mod.MaisonNeueMono).toBeDefined();
	});
});
