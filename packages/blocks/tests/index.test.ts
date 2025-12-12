import { describe, expect, it } from "vitest";
import { blocks } from "../src/index";

describe("@frontal/blocks", () => {
	it("should export blocks registry", () => {
		expect(blocks).toBeDefined();
		expect(Array.isArray(blocks)).toBe(true);
	});
});
