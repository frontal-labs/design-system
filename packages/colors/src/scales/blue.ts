// @frontal-labs/colors - Blue color scale

/**
 * Blue color scale values in OKLCH format
 */
export const blue = {
  blue50: "oklch(97.32% 0.0141 251.56)",
  blue100: "oklch(96.29% 0.0195 250.59)",
  blue200: "oklch(94.58% 0.0293 249.84870859673202)",
  blue300: "oklch(91.58% 0.0473 245.11621922481282)",
  blue400: "oklch(82.75% 0.0979 248.48)",
  blue500: "oklch(73.08% 0.1583 248.133320980386)",
  blue600: "oklch(57.61% 0.2508 258.23)",
  blue700: "oklch(51.51% 0.2399 257.85)",
  blue800: "oklch(53.18% 0.2399 256.9900584162342)",
  blue900: "oklch(26.67% 0.1099 254.34)",
} as const;

/**
 * Blue color scale for dark mode
 */
export const blueDark = {
  blue50: "oklch(22.17% 0.069 259.89)",
  blue100: "oklch(25.45% 0.0811 255.8)",
  blue200: "oklch(30.86% 0.1022 255.21)",
  blue300: "oklch(34.1% 0.121 254.74)",
  blue400: "oklch(38.5% 0.1403 254.4)",
  blue500: "oklch(64.94% 0.1982 251.8131841760864)",
  blue600: "oklch(57.61% 0.2321 258.23)",
  blue700: "oklch(51.51% 0.2307 257.85)",
  blue800: "oklch(71.7% 0.1648 250.79360374054167)",
  blue900: "oklch(96.75% 0.0179 242.4234217368056)",
} as const;

export type BlueScale = typeof blue;
export type BlueDarkScale = typeof blueDark;
