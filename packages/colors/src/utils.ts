// @frontal-labs/colors - Utility functions

import * as scales from "./scales";
import type { ColorScale, ColorScaleName, ColorShade } from "./types";

/**
 * Get a color from a color scale by shade
 * @param scaleName - Name of the color scale
 * @param shade - Shade level (50-900)
 * @param dark - Whether to use dark mode variant
 * @returns Color value in OKLCH format
 */
export function getColor(
  scaleName: ColorScaleName,
  shade: ColorShade,
  dark = false
): string {
  const scaleKey = dark ? `${scaleName}Dark` : scaleName;
  const scale = (scales as Record<string, ColorScale | undefined>)[scaleKey];

  if (!scale) {
    throw new Error(`Color scale "${scaleName}" not found`);
  }

  const key = `${scaleName}${shade}`;
  const color = scale[key];

  if (!color) {
    throw new Error(`Color shade "${key}" not found in scale "${scaleName}"`);
  }

  return color;
}

/**
 * Get a color scale by name
 * @param scaleName - Name of the color scale
 * @param dark - Whether to use dark mode variant
 * @returns Color scale object
 */
export function getScale(scaleName: ColorScaleName, dark = false): ColorScale {
  const scaleKey = dark ? `${scaleName}Dark` : scaleName;
  const scale = (scales as Record<string, ColorScale | undefined>)[scaleKey];

  if (!scale) {
    throw new Error(`Color scale "${scaleName}" not found`);
  }

  return scale;
}

/**
 * Get all color scales
 * @param dark - Whether to use dark mode variants
 * @returns Object containing all color scales
 */
export function getAllScales(dark = false): Record<string, ColorScale> {
  const scaleNames: ColorScaleName[] = [
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
    scaleNames.map((name) => [name, getScale(name, dark)])
  );
}

/**
 * Convert OKLCH to CSS custom property reference
 * @param colorValue - OKLCH color value
 * @param customPropertyName - Name for the CSS custom property
 * @returns CSS var() reference
 */
export function toCSSVar(
  _colorValue: string,
  customPropertyName: string
): string {
  return `var(--${customPropertyName})`;
}
