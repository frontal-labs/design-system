import { describe, expect, test } from "bun:test";
import {
	blue,
	getAllScales,
	getColor,
	getScale,
	gray,
	red,
	toCSSVar,
} from "../src/index";

describe("@frontal/colors", () => {
	test("color scales are exported", () => {
		expect(gray).toBeDefined();
		expect(blue).toBeDefined();
		expect(red).toBeDefined();
	});

	test("getColor returns valid color", () => {
		const color = getColor("gray", 500);
		expect(color).toBeDefined();
		expect(typeof color).toBe("string");
		expect(color).toContain("oklch");
	});

	test("getColor throws for invalid scale", () => {
		expect(() => getColor("invalid" as any, 500)).toThrow();
	});

	test("getColor throws for invalid shade", () => {
		expect(() => getColor("gray", 999 as any)).toThrow();
	});

	test("getScale returns color scale", () => {
		const scale = getScale("gray");
		expect(scale).toBeDefined();
		expect(scale.gray500).toBeDefined();
	});

	test("getScale returns dark scale when requested", () => {
		const darkScale = getScale("gray", true);
		expect(darkScale).toBeDefined();
		expect(darkScale.gray500).toBeDefined();
	});

	test("getAllScales returns all scales", () => {
		const allScales = getAllScales();
		expect(allScales).toBeDefined();
		expect(allScales.gray).toBeDefined();
		expect(allScales.blue).toBeDefined();
		expect(allScales.red).toBeDefined();
	});

	test("toCSSVar returns CSS variable reference", () => {
		const cssVar = toCSSVar("oklch(0.5 0 0)", "test-color");
		expect(cssVar).toBe("var(--test-color)");
	});
});
