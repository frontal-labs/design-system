// @frontal/colors - Brown color scale

/**
 * Brown color scale values in OKLCH format
 */
export const brown = {
	brown50: "oklch(97.32% 0.022 49)",
	brown100: "oklch(95.5% 0.032 50)",
	brown200: "oklch(92.5% 0.045 51)",
	brown300: "oklch(87% 0.07 52)",
	brown400: "oklch(78% 0.11 53)",
	brown500: "oklch(68% 0.14 54)",
	brown600: "oklch(58% 0.13 55)",
	brown700: "oklch(48% 0.11 56)",
	brown800: "oklch(38% 0.09 57)",
	brown900: "oklch(28% 0.07 58)",
} as const;

/**
 * Brown color scale for dark mode
 */
export const brownDark = {
	brown50: "oklch(22.46% 0.0538 45.04)",
	brown100: "oklch(24.95% 0.0642 45.78)",
	brown200: "oklch(32.34% 0.0837 45.83)",
	brown300: "oklch(35.53% 0.0903 45.29707162673735)",
	brown400: "oklch(41.55% 0.1044 45.98)",
	brown500: "oklch(75.04% 0.1737 45.49)",
	brown600: "oklch(81.87% 0.1969 45.46)",
	brown700: "oklch(77.21% 0.1991 45.28)",
	brown800: "oklch(77.21% 0.1991 45.28)",
	brown900: "oklch(96.7% 0.0418 45.59)",
} as const;

export type BrownScale = typeof brown;
export type BrownDarkScale = typeof brownDark;
