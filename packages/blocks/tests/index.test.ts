import { describe, expect, it } from "vitest";
import { blocks } from "../src/index";

describe("@frontal/blocks", () => {
	it("should export blocks registry", () => {
		expect(blocks).toBeDefined();
		expect(Array.isArray(blocks)).toBe(true);
	});

	it("should have blocks in the registry", () => {
		expect(blocks.length).toBeGreaterThan(0);
	});

	it("should have blocks with required properties", () => {
		blocks.forEach((block) => {
			expect(block).toHaveProperty("name");
			expect(block).toHaveProperty("type");
			expect(block.name).toBeTruthy();
			expect(block.type).toBe("registry:block");
		});
	});

	it("should have blocks with files array", () => {
		blocks.forEach((block) => {
			expect(block).toHaveProperty("files");
			expect(Array.isArray(block.files)).toBe(true);
			expect(block.files.length).toBeGreaterThan(0);
		});
	});
});
