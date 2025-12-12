// @frontal/colors - Cyan color scale

/**
 * Cyan color scale values in OKLCH format
 */
export const cyan = {
	cyan50: "oklch(97.32% 0.0141 193.56)",
	cyan100: "oklch(96.29% 0.0195 193.59)",
	cyan200: "oklch(94.58% 0.0293 189.85)",
	cyan300: "oklch(91.58% 0.0473 185.12)",
	cyan400: "oklch(82.75% 0.0979 188.48)",
	cyan500: "oklch(73.08% 0.1583 188.13)",
	cyan600: "oklch(57.61% 0.2508 198.23)",
	cyan700: "oklch(51.51% 0.2399 197.85)",
	cyan800: "oklch(53.18% 0.2399 196.99)",
	cyan900: "oklch(26.67% 0.1099 194.34)",
} as const;

/**
 * Cyan color scale for dark mode
 */
export const cyanDark = {
	cyan50: "oklch(22.17% 0.069 189.89)",
	cyan100: "oklch(25.45% 0.0811 185.8)",
	cyan200: "oklch(30.86% 0.1022 185.21)",
	cyan300: "oklch(34.1% 0.121 184.74)",
	cyan400: "oklch(38.5% 0.1403 184.4)",
	cyan500: "oklch(64.94% 0.1982 181.8131841760864)",
	cyan600: "oklch(57.61% 0.2321 188.23)",
	cyan700: "oklch(51.51% 0.2307 187.85)",
	cyan800: "oklch(71.7% 0.1648 180.79360374054167)",
	cyan900: "oklch(96.75% 0.0179 192.4234217368056)",
} as const;

export type CyanScale = typeof cyan;
export type CyanDarkScale = typeof cyanDark;
