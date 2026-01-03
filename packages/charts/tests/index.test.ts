import { describe, expect, test } from "bun:test";

describe("@frontal/charts", () => {
	test("package exports exist", async () => {
		const mod = await import("../src/index");
		expect(mod).toBeDefined();
	});

	test("package can be imported", () => {
		expect(() => import("../src/index")).not.toThrow();
	});
});
