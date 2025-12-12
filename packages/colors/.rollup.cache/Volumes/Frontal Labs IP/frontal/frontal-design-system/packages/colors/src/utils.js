// @frontal/colors - Utility functions
import * as scales from "./scales";
/**
 * Get a color from a color scale by shade
 * @param scaleName - Name of the color scale
 * @param shade - Shade level (50-900)
 * @param dark - Whether to use dark mode variant
 * @returns Color value in OKLCH format
 */
export function getColor(scaleName, shade, dark) {
	if (dark === void 0) {
		dark = false;
	}
	var scale = scales[dark ? "".concat(scaleName, "Dark") : scaleName];
	if (!scale) {
		throw new Error('Color scale "'.concat(scaleName, '" not found'));
	}
	var key = "".concat(scaleName).concat(shade);
	var color = scale[key];
	if (!color) {
		throw new Error(
			'Color shade "'
				.concat(key, '" not found in scale "')
				.concat(scaleName, '"'),
		);
	}
	return color;
}
/**
 * Get a color scale by name
 * @param scaleName - Name of the color scale
 * @param dark - Whether to use dark mode variant
 * @returns Color scale object
 */
export function getScale(scaleName, dark) {
	if (dark === void 0) {
		dark = false;
	}
	var scale = scales[dark ? "".concat(scaleName, "Dark") : scaleName];
	if (!scale) {
		throw new Error('Color scale "'.concat(scaleName, '" not found'));
	}
	return scale;
}
/**
 * Get all color scales
 * @param dark - Whether to use dark mode variants
 * @returns Object containing all color scales
 */
export function getAllScales(dark) {
	if (dark === void 0) {
		dark = false;
	}
	var scaleNames = [
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
	return Object.fromEntries(
		scaleNames.map((name) => [name, getScale(name, dark)]),
	);
}
/**
 * Convert OKLCH to CSS custom property reference
 * @param colorValue - OKLCH color value
 * @param customPropertyName - Name for the CSS custom property
 * @returns CSS var() reference
 */
export function toCSSVar(_colorValue, customPropertyName) {
	return "var(--".concat(customPropertyName, ")");
}
//# sourceMappingURL=utils.js.map
