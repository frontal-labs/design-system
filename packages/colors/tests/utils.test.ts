import { describe, expect, it } from "vitest";
import { blue, gray, grayDark } from "../src/scales";
import { getAllScales, getColor, getScale, toCSSVar } from "../src/utils";

/**
 * Unit tests for @frontal/colors utility functions
 */
describe("@frontal/colors - Utility Functions", () => {
	describe("getColor", () => {
		it("should get a color from gray scale", () => {
			const color = getColor("gray", 500);
			expect(color).toBe(gray.gray500);
			expect(color).toMatch(/^oklch\(.+\)$/);
		});

		it("should get a color from blue scale", () => {
			const color = getColor("blue", 600);
			expect(color).toBe(blue.blue600);
			expect(color).toMatch(/^oklch\(.+\)$/);
		});

		it("should get dark mode colors when dark flag is true", () => {
			const lightColor = getColor("gray", 500, false);
			const darkColor = getColor("gray", 500, true);

			expect(lightColor).toBe(gray.gray500);
			expect(darkColor).toBe(grayDark.gray500);
			expect(lightColor).not.toBe(darkColor);
		});

		it("should get different shades correctly", () => {
			const gray50 = getColor("gray", 50);
			const gray100 = getColor("gray", 100);
			const gray500 = getColor("gray", 500);
			const gray900 = getColor("gray", 900);

			expect(gray50).toBe(gray.gray50);
			expect(gray100).toBe(gray.gray100);
			expect(gray500).toBe(gray.gray500);
			expect(gray900).toBe(gray.gray900);
		});

		it("should throw error for invalid scale name", () => {
			expect(() => {
				getColor("invalid" as any, 500);
			}).toThrow(/Color scale "invalid" not found/);
		});

		it("should work with all color scales", () => {
			const scales: Array<
				| "gray"
				| "blue"
				| "cyan"
				| "yellow"
				| "brown"
				| "green"
				| "teal"
				| "pink"
				| "purple"
				| "orange"
				| "red"
			> = [
				"gray",
				"blue",
				"cyan",
				"yellow",
				"brown",
				"green",
				"teal",
				"pink",
				"purple",
				"orange",
				"red",
			];

			for (const scale of scales) {
				const color = getColor(scale, 500);
				expect(color).toBeDefined();
				expect(color).toMatch(/^oklch\(.+\)$/);
			}
		});
	});

	describe("getScale", () => {
		it("should get gray scale", () => {
			const scale = getScale("gray");
			expect(scale).toBeDefined();
			expect(scale).toHaveProperty("gray50");
			expect(scale).toHaveProperty("gray500");
			expect(scale).toHaveProperty("gray900");
		});

		it("should get blue scale", () => {
			const scale = getScale("blue");
			expect(scale).toBeDefined();
			expect(scale).toHaveProperty("blue50");
			expect(scale).toHaveProperty("blue500");
			expect(scale).toHaveProperty("blue900");
		});

		it("should get dark mode scale when dark flag is true", () => {
			const lightScale = getScale("gray", false);
			const darkScale = getScale("gray", true);

			expect(lightScale).toBeDefined();
			expect(darkScale).toBeDefined();
			expect(lightScale).not.toBe(darkScale);
			expect(lightScale.gray500).not.toBe(darkScale.gray500);
		});

		it("should return scale with all standard shades", () => {
			const scale = getScale("blue");
			const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

			for (const shade of shades) {
				expect(scale).toHaveProperty(`blue${shade}`);
			}
		});

		it("should throw error for invalid scale name", () => {
			expect(() => {
				getScale("invalid" as any);
			}).toThrow(/Color scale "invalid" not found/);
		});

		it("should work with all color scales", () => {
			const scales: Array<
				| "gray"
				| "blue"
				| "cyan"
				| "yellow"
				| "brown"
				| "green"
				| "teal"
				| "pink"
				| "purple"
				| "orange"
				| "red"
			> = [
				"gray",
				"blue",
				"cyan",
				"yellow",
				"brown",
				"green",
				"teal",
				"pink",
				"purple",
				"orange",
				"red",
			];

			for (const scaleName of scales) {
				const scale = getScale(scaleName);
				expect(scale).toBeDefined();
				expect(Object.keys(scale).length).toBeGreaterThan(0);
			}
		});
	});

	describe("getAllScales", () => {
		it("should get all color scales for light mode", () => {
			const allScales = getAllScales(false);

			expect(allScales).toBeDefined();
			expect(allScales.gray).toBeDefined();
			expect(allScales.blue).toBeDefined();
			expect(allScales.red).toBeDefined();
		});

		it("should get all color scales for dark mode", () => {
			const allScales = getAllScales(true);

			expect(allScales).toBeDefined();
			expect(allScales.gray).toBeDefined();
			expect(allScales.blue).toBeDefined();
			expect(allScales.red).toBeDefined();
		});

		it("should return all 11 color scales", () => {
			const allScales = getAllScales();
			const expectedScales = [
				"gray",
				"blue",
				"cyan",
				"yellow",
				"brown",
				"green",
				"teal",
				"pink",
				"purple",
				"orange",
				"red",
			];

			expect(Object.keys(allScales).length).toBe(11);
			for (const scaleName of expectedScales) {
				expect(allScales).toHaveProperty(scaleName);
			}
		});

		it("should return different values for light and dark modes", () => {
			const lightScales = getAllScales(false);
			const darkScales = getAllScales(true);

			expect(lightScales.gray.gray500).not.toBe(darkScales.gray.gray500);
			expect(lightScales.blue.blue500).not.toBe(darkScales.blue.blue500);
		});

		it("should return scales with proper structure", () => {
			const allScales = getAllScales();
			const grayScale = allScales.gray;

			expect(grayScale).toHaveProperty("gray50");
			expect(grayScale).toHaveProperty("gray500");
			expect(grayScale).toHaveProperty("gray900");
		});
	});

	describe("toCSSVar", () => {
		it("should convert to CSS custom property reference", () => {
			const cssVar = toCSSVar("oklch(0.5 0.1 200)", "my-color");
			expect(cssVar).toBe("var(--my-color)");
		});

		it("should work with any color value", () => {
			const cssVar1 = toCSSVar("oklch(1 0 0)", "background");
			const cssVar2 = toCSSVar("red", "primary");

			expect(cssVar1).toBe("var(--background)");
			expect(cssVar2).toBe("var(--primary)");
		});

		it("should handle custom property names with dashes", () => {
			const cssVar = toCSSVar("oklch(0.5 0.1 200)", "my-custom-color");
			expect(cssVar).toBe("var(--my-custom-color)");
		});

		it("should handle custom property names with underscores", () => {
			const cssVar = toCSSVar("oklch(0.5 0.1 200)", "my_custom_color");
			expect(cssVar).toBe("var(--my_custom_color)");
		});
	});

	describe("Utility function integration", () => {
		it("should work together: getScale and getColor", () => {
			const scale = getScale("blue");
			const color = getColor("blue", 500);

			expect(scale.blue500).toBe(color);
		});

		it("should work together: getAllScales and getColor", () => {
			const allScales = getAllScales();
			const color = getColor("gray", 600);

			expect(allScales.gray.gray600).toBe(color);
		});

		it("should work with toCSSVar for creating CSS variables", () => {
			const color = getColor("blue", 500);
			const cssVar = toCSSVar(color, "blue-500");

			expect(cssVar).toBe("var(--blue-500)");
		});
	});
});
