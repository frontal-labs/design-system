// @frontal/colors - Red color scale

/**
 * Red color scale values in OKLCH format
 */
export const red = {
	red50: "oklch(96.5% 0.0223 13.09)",
	red100: "oklch(95.41% 0.0299 14.252646656611997)",
	red200: "oklch(94.33% 0.0369 15.011509923860523)",
	red300: "oklch(91.51% 0.0471 19.8)",
	red400: "oklch(84.47% 0.1018 17.71)",
	red500: "oklch(71.12% 0.1881 21.22)",
	red600: "oklch(62.56% 0.2524 23.03)",
	red700: "oklch(58.19% 0.2482 25.15)",
	red800: "oklch(54.99% 0.232 25.29)",
	red900: "oklch(24.8% 0.1041 18.86)",
} as const;

/**
 * Red color scale for dark mode
 */
export const redDark = {
	red50: "oklch(22.1% 0.0657 15.11)",
	red100: "oklch(25.93% 0.0834 19.02)",
	red200: "oklch(31.47% 0.1105 20.96)",
	red300: "oklch(35.27% 0.1273 21.23)",
	red400: "oklch(40.68% 0.1479 23.16)",
	red500: "oklch(62.56% 0.2277 23.03)",
	red600: "oklch(62.56% 0.2234 23.03)",
	red700: "oklch(58.01% 0.227 25.12)",
	red800: "oklch(69.96% 0.2136 22.03)",
	red900: "oklch(95.6% 0.0293 6.61)",
} as const;

export type RedScale = typeof red;
export type RedDarkScale = typeof redDark;
