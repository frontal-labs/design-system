import { describe, expect, test } from "bun:test";

describe("@frontal/components", () => {
	test("package exports exist", async () => {
		const mod = await import("../src/index");
		expect(mod).toBeDefined();
	});

	test("package can be imported", () => {
		expect(() => import("../src/index")).not.toThrow();
	});
});
