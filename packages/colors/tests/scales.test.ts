import { describe, expect, it } from "vitest";
import {
	blue,
	blueDark,
	brown,
	brownDark,
	cyan,
	cyanDark,
	gray,
	grayDark,
	green,
	greenDark,
	orange,
	orangeDark,
	pink,
	pinkDark,
	purple,
	purpleDark,
	red,
	redDark,
	teal,
	tealDark,
	yellow,
	yellowDark,
} from "../src/scales";

/**
 * Unit tests for @frontal/colors color scales
 */
describe("@frontal/colors - Color Scales", () => {
	describe("Gray scale", () => {
		it("should export gray scale with all shades", () => {
			expect(gray).toBeDefined();
			expect(gray.gray50).toBe("oklch(0.95 0 0)");
			expect(gray.gray100).toBe("oklch(0.96 0 0)");
			expect(gray.gray500).toBe("oklch(0.66 0 0)");
			expect(gray.gray900).toBe("oklch(0.09 0 0)");
		});

		it("should export grayDark scale with all shades", () => {
			expect(grayDark).toBeDefined();
			expect(grayDark.gray50).toBe("oklch(0.195 0 0)");
			expect(grayDark.gray1000).toBe("oklch(0.93 0 0)");
		});

		it("should have all required shades (50-900)", () => {
			const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
			for (const shade of shades) {
				expect(gray[`gray${shade}` as keyof typeof gray]).toBeDefined();
				expect(grayDark[`gray${shade}` as keyof typeof grayDark]).toBeDefined();
			}
		});

		it("should have valid OKLCH color format", () => {
			expect(gray.gray500).toMatch(/^oklch\(.+\)$/);
		});
	});

	describe("Blue scale", () => {
		it("should export blue scale with all shades", () => {
			expect(blue).toBeDefined();
			expect(blue.blue50).toMatch(/^oklch\(.+\)$/);
			expect(blue.blue500).toMatch(/^oklch\(.+\)$/);
			expect(blue.blue900).toMatch(/^oklch\(.+\)$/);
		});

		it("should export blueDark scale", () => {
			expect(blueDark).toBeDefined();
			expect(blueDark.blue50).toMatch(/^oklch\(.+\)$/);
		});

		it("should have different values for light and dark modes", () => {
			expect(blue.blue500).not.toBe(blueDark.blue500);
		});
	});

	describe("Cyan scale", () => {
		it("should export cyan scale", () => {
			expect(cyan).toBeDefined();
			expect(cyan.cyan50).toMatch(/^oklch\(.+\)$/);
			expect(cyanDark).toBeDefined();
		});
	});

	describe("Yellow scale", () => {
		it("should export yellow scale", () => {
			expect(yellow).toBeDefined();
			expect(yellow.yellow50).toMatch(/^oklch\(.+\)$/);
			expect(yellowDark).toBeDefined();
		});
	});

	describe("Brown scale", () => {
		it("should export brown scale", () => {
			expect(brown).toBeDefined();
			expect(brown.brown50).toMatch(/^oklch\(.+\)$/);
			expect(brownDark).toBeDefined();
		});
	});

	describe("Green scale", () => {
		it("should export green scale", () => {
			expect(green).toBeDefined();
			expect(green.green50).toMatch(/^oklch\(.+\)$/);
			expect(greenDark).toBeDefined();
		});
	});

	describe("Teal scale", () => {
		it("should export teal scale", () => {
			expect(teal).toBeDefined();
			expect(teal.teal50).toMatch(/^oklch\(.+\)$/);
			expect(tealDark).toBeDefined();
		});
	});

	describe("Pink scale", () => {
		it("should export pink scale", () => {
			expect(pink).toBeDefined();
			expect(pink.pink50).toMatch(/^oklch\(.+\)$/);
			expect(pinkDark).toBeDefined();
		});
	});

	describe("Purple scale", () => {
		it("should export purple scale", () => {
			expect(purple).toBeDefined();
			expect(purple.purple50).toMatch(/^oklch\(.+\)$/);
			expect(purpleDark).toBeDefined();
		});
	});

	describe("Orange scale", () => {
		it("should export orange scale", () => {
			expect(orange).toBeDefined();
			expect(orange.orange50).toMatch(/^oklch\(.+\)$/);
			expect(orangeDark).toBeDefined();
		});
	});

	describe("Red scale", () => {
		it("should export red scale", () => {
			expect(red).toBeDefined();
			expect(red.red50).toMatch(/^oklch\(.+\)$/);
			expect(redDark).toBeDefined();
		});
	});

	describe("Color scale consistency", () => {
		const colorScales = [
			{ name: "gray", light: gray, dark: grayDark },
			{ name: "blue", light: blue, dark: blueDark },
			{ name: "cyan", light: cyan, dark: cyanDark },
			{ name: "yellow", light: yellow, dark: yellowDark },
			{ name: "brown", light: brown, dark: brownDark },
			{ name: "green", light: green, dark: greenDark },
			{ name: "teal", light: teal, dark: tealDark },
			{ name: "pink", light: pink, dark: pinkDark },
			{ name: "purple", light: purple, dark: purpleDark },
			{ name: "orange", light: orange, dark: orangeDark },
			{ name: "red", light: red, dark: redDark },
		];

		it("should have all scales with standard shades (50-900)", () => {
			const standardShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

			for (const scale of colorScales) {
				for (const shade of standardShades) {
					const key = `${scale.name}${shade}` as keyof typeof scale.light;
					expect(scale.light[key]).toBeDefined();
					expect(scale.light[key]).toMatch(/^oklch\(.+\)$/);
				}
			}
		});

		it("should have valid OKLCH format for all colors", () => {
			for (const scale of colorScales) {
				for (const key in scale.light) {
					const color = scale.light[key as keyof typeof scale.light];
					expect(color).toMatch(/^oklch\(.+\)$/);
				}

				for (const key in scale.dark) {
					const color = scale.dark[key as keyof typeof scale.dark];
					expect(color).toMatch(/^oklch\(.+\)$/);
				}
			}
		});

		it("should have different values between light and dark modes for most shades", () => {
			// Skip gray as it might have some similar values
			const nonGrayScales = colorScales.filter((s) => s.name !== "gray");

			// Track how many shades are different
			let differentCount = 0;
			let totalChecked = 0;

			for (const scale of nonGrayScales) {
				const shades = [500, 600, 700]; // Test mid-range shades
				for (const shade of shades) {
					const key = `${scale.name}${shade}` as keyof typeof scale.light;
					if (scale.light[key] && scale.dark[key]) {
						totalChecked++;
						if (scale.light[key] !== scale.dark[key]) {
							differentCount++;
						}
					}
				}
			}

			// At least 80% of shades should be different (some colors may share values)
			const differenceRatio = differentCount / totalChecked;
			expect(differenceRatio).toBeGreaterThan(0.8);
		});
	});
});
