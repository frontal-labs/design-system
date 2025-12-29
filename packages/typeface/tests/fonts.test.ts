import { describe, expect, it } from "bun:test";
import { fonts, MaisonNeue, MaisonNeueMono } from "../src/index";

/**
 * Unit tests for @frontal/typeface font exports and configuration
 */
describe("@frontal/typeface", () => {
	describe("exports", () => {
		it("should export fonts function", () => {
			expect(fonts).toBeDefined();
			expect(typeof fonts).toBe("string");
		});

		it("should export MaisonNeue font", () => {
			expect(MaisonNeue).toBeDefined();
			expect(MaisonNeue.variable).toBeDefined();
			expect(typeof MaisonNeue.variable).toBe("string");
		});

		it("should export MaisonNeueMono font", () => {
			expect(MaisonNeueMono).toBeDefined();
			expect(MaisonNeueMono.variable).toBeDefined();
			expect(typeof MaisonNeueMono.variable).toBe("string");
		});
	});

	describe("font variables", () => {
		it("should have correct CSS variable name for MaisonNeue", () => {
			expect(MaisonNeue.variable).toBe("--font-maison-neue");
		});

		it("should have correct CSS variable name for MaisonNeueMono", () => {
			expect(MaisonNeueMono.variable).toBe("--font-maison-neue-mono");
		});
	});

	describe("fonts utility", () => {
		it("should include MaisonNeue variable", () => {
			expect(fonts).toContain(MaisonNeue.variable);
		});

		it("should include MaisonNeueMono variable", () => {
			expect(fonts).toContain(MaisonNeueMono.variable);
		});

		it("should include default typography classes", () => {
			expect(fonts).toContain("touch-manipulation");
			expect(fonts).toContain("font-sans");
			expect(fonts).toContain("leading-normal");
			expect(fonts).toContain("antialiased");
		});
	});

	describe("MaisonNeue configuration", () => {
		it("should have className property", () => {
			expect(MaisonNeue.className).toBeDefined();
			expect(typeof MaisonNeue.className).toBe("string");
		});

		it("should have style property", () => {
			expect(MaisonNeue.style).toBeDefined();
			expect(typeof MaisonNeue.style).toBe("object");
		});

		it("should have a className that relates to the font", () => {
			expect(MaisonNeue.className).toBeDefined();
			expect(MaisonNeue.className.length).toBeGreaterThan(0);
		});
	});

	describe("MaisonNeueMono configuration", () => {
		it("should have className property", () => {
			expect(MaisonNeueMono.className).toBeDefined();
			expect(typeof MaisonNeueMono.className).toBe("string");
		});

		it("should have style property", () => {
			expect(MaisonNeueMono.style).toBeDefined();
			expect(typeof MaisonNeueMono.style).toBe("object");
		});

		it("should have a className that relates to the font", () => {
			expect(MaisonNeueMono.className).toBeDefined();
			expect(MaisonNeueMono.className.length).toBeGreaterThan(0);
		});
	});

	describe("font consistency", () => {
		it("should have different variable names for different fonts", () => {
			expect(MaisonNeue.variable).not.toBe(MaisonNeueMono.variable);
		});

		it("should have different classNames for different fonts", () => {
			expect(MaisonNeue.className).not.toBe(MaisonNeueMono.className);
		});
	});
});
