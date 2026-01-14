// @frontal-ds/colors - Type definitions

/**
 * Color shade levels (50-900)
 */
export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

/**
 * Extended color shade levels (includes 1000 for dark mode)
 */
export type ExtendedColorShade = ColorShade | 1000;

/**
 * Color scale names
 */
export type ColorScaleName =
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
  | "red";

/**
 * OKLCH color value
 */
export type OKLCHColor = `oklch(${string})`;

/**
 * CSS custom property color value
 */
export type CSSColor = `var(--${string})`;

/**
 * Color value (OKLCH or CSS variable)
 */
export type ColorValue = OKLCHColor | CSSColor | string;

/**
 * Color scale object with shade keys
 */
export type ColorScale = Record<string, ColorValue>;
