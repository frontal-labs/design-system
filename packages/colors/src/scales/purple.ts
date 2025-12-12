// @frontal/colors - Purple color scale

/**
 * Purple color scale values in OKLCH format
 */
export const purple = {
	purple50: "oklch(96.65% 0.0244 312.1890119359961)",
	purple100: "oklch(96.73% 0.0228 309.8)",
	purple200: "oklch(94.85% 0.0364 310.15)",
	purple300: "oklch(91.77% 0.0614 312.82)",
	purple400: "oklch(81.26% 0.1409 310.8)",
	purple500: "oklch(72.07% 0.2083 308.19)",
	purple600: "oklch(55.5% 0.3008 306.12)",
	purple700: "oklch(48.58% 0.2638 305.73)",
	purple800: "oklch(47.18% 0.2579 304)",
	purple900: "oklch(23.96% 0.13 305.66)",
} as const;

/**
 * Purple color scale for dark mode
 */
export const purpleDark = {
	purple50: "oklch(22.34% 0.0779 316.87)",
	purple100: "oklch(25.91% 0.0921 314.41)",
	purple200: "oklch(31.98% 0.1219 312.41)",
	purple300: "oklch(35.93% 0.1504 309.78)",
	purple400: "oklch(40.99% 0.1721 307.92)",
	purple500: "oklch(55.5% 0.2191 306.12)",
	purple600: "oklch(55.5% 0.2186 306.12)",
	purple700: "oklch(48.58% 0.2102 305.73)",
	purple800: "oklch(69.87% 0.2037 309.51)",
	purple900: "oklch(96.1% 0.0304 316.46)",
} as const;

export type PurpleScale = typeof purple;
export type PurpleDarkScale = typeof purpleDark;
