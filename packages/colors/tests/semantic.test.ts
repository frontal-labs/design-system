import { describe, expect, it } from "vitest";
import { semantic, semanticDark } from "../src/semantic";

/**
 * Unit tests for @frontal/colors semantic color tokens
 */
describe("@frontal/colors - Semantic Colors", () => {
	describe("Semantic color exports", () => {
		it("should export semantic colors object", () => {
			expect(semantic).toBeDefined();
			expect(typeof semantic).toBe("object");
		});

		it("should export semanticDark colors object", () => {
			expect(semanticDark).toBeDefined();
			expect(typeof semanticDark).toBe("object");
		});
	});

	describe("Background and foreground", () => {
		it("should have background color", () => {
			expect(semantic.background).toBeDefined();
			expect(semantic.background).toMatch(/^oklch\(.+\)$/);
		});

		it("should have foreground color", () => {
			expect(semantic.foreground).toBeDefined();
			expect(semantic.foreground).toMatch(/^oklch\(.+\)$/);
		});

		it("should have dark mode background and foreground", () => {
			expect(semanticDark.background).toBeDefined();
			expect(semanticDark.foreground).toBeDefined();
		});

		it("should have different background values for light and dark", () => {
			expect(semantic.background).not.toBe(semanticDark.background);
		});
	});

	describe("Card colors", () => {
		it("should have card colors", () => {
			expect(semantic.card).toBeDefined();
			expect(semantic.cardForeground).toBeDefined();
			expect(semantic.card).toMatch(/^oklch\(.+\)$/);
		});

		it("should have dark mode card colors", () => {
			expect(semanticDark.card).toBeDefined();
			expect(semanticDark.cardForeground).toBeDefined();
		});
	});

	describe("Primary colors", () => {
		it("should have primary colors", () => {
			expect(semantic.primary).toBeDefined();
			expect(semantic.primaryForeground).toBeDefined();
			expect(semantic.primary).toMatch(/^oklch\(.+\)$/);
		});

		it("should have dark mode primary colors", () => {
			expect(semanticDark.primary).toBeDefined();
			expect(semanticDark.primaryForeground).toBeDefined();
		});
	});

	describe("Secondary colors", () => {
		it("should have secondary colors", () => {
			expect(semantic.secondary).toBeDefined();
			expect(semantic.secondaryForeground).toBeDefined();
		});

		it("should have dark mode secondary colors", () => {
			expect(semanticDark.secondary).toBeDefined();
			expect(semanticDark.secondaryForeground).toBeDefined();
		});
	});

	describe("Muted colors", () => {
		it("should have muted colors", () => {
			expect(semantic.muted).toBeDefined();
			expect(semantic.mutedForeground).toBeDefined();
		});

		it("should have dark mode muted colors", () => {
			expect(semanticDark.muted).toBeDefined();
			expect(semanticDark.mutedForeground).toBeDefined();
		});
	});

	describe("Accent colors", () => {
		it("should have accent colors", () => {
			expect(semantic.accent).toBeDefined();
			expect(semantic.accentForeground).toBeDefined();
		});

		it("should have dark mode accent colors", () => {
			expect(semanticDark.accent).toBeDefined();
			expect(semanticDark.accentForeground).toBeDefined();
		});
	});

	describe("Destructive color", () => {
		it("should have destructive color", () => {
			expect(semantic.destructive).toBeDefined();
			expect(semantic.destructive).toMatch(/^oklch\(.+\)$/);
		});

		it("should have dark mode destructive color", () => {
			expect(semanticDark.destructive).toBeDefined();
		});
	});

	describe("Border and input colors", () => {
		it("should have border color", () => {
			expect(semantic.border).toBeDefined();
			expect(semantic.border).toMatch(/^oklch\(.+\)$/);
		});

		it("should have input color", () => {
			expect(semantic.input).toBeDefined();
			expect(semantic.input).toMatch(/^oklch\(.+\)$/);
		});

		it("should have ring color", () => {
			expect(semantic.ring).toBeDefined();
			expect(semantic.ring).toMatch(/^oklch\(.+\)$/);
		});
	});

	describe("Chart colors", () => {
		it("should have chart colors (1-5)", () => {
			expect(semantic.chart1).toBeDefined();
			expect(semantic.chart2).toBeDefined();
			expect(semantic.chart3).toBeDefined();
			expect(semantic.chart4).toBeDefined();
			expect(semantic.chart5).toBeDefined();
		});

		it("should have dark mode chart colors", () => {
			expect(semanticDark.chart1).toBeDefined();
			expect(semanticDark.chart2).toBeDefined();
			expect(semanticDark.chart3).toBeDefined();
			expect(semanticDark.chart4).toBeDefined();
			expect(semanticDark.chart5).toBeDefined();
		});
	});

	describe("Sidebar colors", () => {
		it("should have sidebar colors", () => {
			expect(semantic.sidebar).toBeDefined();
			expect(semantic.sidebarForeground).toBeDefined();
			expect(semantic.sidebarPrimary).toBeDefined();
			expect(semantic.sidebarPrimaryForeground).toBeDefined();
			expect(semantic.sidebarAccent).toBeDefined();
			expect(semantic.sidebarAccentForeground).toBeDefined();
			expect(semantic.sidebarMuted).toBeDefined();
			expect(semantic.sidebarMutedForeground).toBeDefined();
			expect(semantic.sidebarBorder).toBeDefined();
			expect(semantic.sidebarRing).toBeDefined();
		});

		it("should have dark mode sidebar colors", () => {
			expect(semanticDark.sidebar).toBeDefined();
			expect(semanticDark.sidebarForeground).toBeDefined();
			expect(semanticDark.sidebarPrimary).toBeDefined();
		});
	});

	describe("Surface colors", () => {
		it("should have surface colors", () => {
			expect(semantic.surface).toBeDefined();
			expect(semantic.surfaceForeground).toBeDefined();
			expect(semantic.surface).toMatch(/^oklch\(.+\)$/);
		});

		it("should have dark mode surface colors", () => {
			expect(semanticDark.surface).toBeDefined();
			expect(semanticDark.surfaceForeground).toBeDefined();
		});
	});

	describe("Code colors", () => {
		it("should have code colors", () => {
			expect(semantic.code).toBeDefined();
			expect(semantic.codeForeground).toBeDefined();
			expect(semantic.codeHighlight).toBeDefined();
			expect(semantic.codeNumber).toBeDefined();
		});

		it("should have dark mode code colors", () => {
			expect(semanticDark.code).toBeDefined();
			expect(semanticDark.codeForeground).toBeDefined();
			expect(semanticDark.codeHighlight).toBeDefined();
			expect(semanticDark.codeNumber).toBeDefined();
		});
	});

	describe("Selection colors", () => {
		it("should have selection colors", () => {
			expect(semantic.selection).toBeDefined();
			expect(semantic.selectionForeground).toBeDefined();
		});

		it("should have dark mode selection colors", () => {
			expect(semanticDark.selection).toBeDefined();
			expect(semanticDark.selectionForeground).toBeDefined();
		});
	});

	describe("Color format validation", () => {
		it("should have all colors in valid OKLCH format", () => {
			for (const key in semantic) {
				const color = semantic[key as keyof typeof semantic];
				if (typeof color === "string") {
					expect(color).toMatch(/^(oklch\(.+\)|var\(--.+\))$/);
				}
			}

			for (const key in semanticDark) {
				const color = semanticDark[key as keyof typeof semanticDark];
				if (typeof color === "string") {
					expect(color).toMatch(/^(oklch\(.+\)|var\(--.+\))$/);
				}
			}
		});
	});

	describe("Semantic color structure", () => {
		it("should have consistent structure between light and dark modes", () => {
			const lightKeys = Object.keys(semantic).sort();
			const darkKeys = Object.keys(semanticDark).sort();

			expect(lightKeys).toEqual(darkKeys);
		});
	});
});
