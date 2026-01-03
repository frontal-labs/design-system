import { describe, expect, test } from "bun:test";
import { blocks } from "../src/index";

describe("@frontal/blocks", () => {
	test("blocks registry exists", () => {
		expect(blocks).toBeDefined();
		expect(Array.isArray(blocks)).toBe(true);
	});

	test("blocks registry has items", () => {
		expect(blocks.length).toBeGreaterThan(0);
	});

	test("blocks have required properties", () => {
		const firstBlock = blocks[0];
		expect(firstBlock).toHaveProperty("name");
		expect(firstBlock).toHaveProperty("type");
		expect(firstBlock).toHaveProperty("description");
	});

	test("blocks registry contains expected block types", () => {
		const blockNames = blocks.map((block) => block.name);
		expect(blockNames).toContain("dashboard-01");
		expect(blockNames).toContain("sidebar-01");
		expect(blockNames).toContain("login-01");
	});
});
