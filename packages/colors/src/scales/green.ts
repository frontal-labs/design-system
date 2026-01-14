// @frontal-ds/colors - Green color scale

/**
 * Green color scale values in OKLCH format
 */
export const green = {
  green50: "oklch(97.59% 0.0289 145.42)",
  green100: "oklch(96.92% 0.037 147.15)",
  green200: "oklch(94.6% 0.0674 144.23)",
  green300: "oklch(91.49% 0.0976 146.24)",
  green400: "oklch(85.45% 0.1627 146.3)",
  green500: "oklch(80.25% 0.214 145.18)",
  green600: "oklch(64.58% 0.1746 147.27)",
  green700: "oklch(57.81% 0.1507 147.5)",
  green800: "oklch(51.75% 0.1453 147.65)",
  green900: "oklch(29.15% 0.1197 147.38)",
} as const;

/**
 * Green color scale for dark mode
 */
export const greenDark = {
  green50: "oklch(23.09% 0.0716 149.68)",
  green100: "oklch(27.12% 0.0895 150.09)",
  green200: "oklch(29.84% 0.096 149.25)",
  green300: "oklch(34.39% 0.1039 147.78)",
  green400: "oklch(44.19% 0.1484 147.2)",
  green500: "oklch(58.11% 0.1815 146.55)",
  green600: "oklch(64.58% 0.199 147.27)",
  green700: "oklch(57.81% 0.1776 147.5)",
  green800: "oklch(73.1% 0.2158 148.29)",
  green900: "oklch(96.76% 0.056 154.18)",
} as const;

export type GreenScale = typeof green;
export type GreenDarkScale = typeof greenDark;
