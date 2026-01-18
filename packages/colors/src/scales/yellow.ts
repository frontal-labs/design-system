// @frontal-labs/colors - Yellow color scale

/**
 * Yellow color scale values in OKLCH format
 */
export const yellow = {
  yellow50: "oklch(97.48% 0.0331 85.79)",
  yellow100: "oklch(96.81% 0.0495 90.24227879900472)",
  yellow200: "oklch(95.93% 0.0636 90.52)",
  yellow300: "oklch(91.02% 0.1322 88.25)",
  yellow400: "oklch(86.55% 0.1583 79.63)",
  yellow500: "oklch(80.25% 0.1953 73.59)",
  yellow600: "oklch(81.87% 0.1969 76.46)",
  yellow700: "oklch(77.21% 0.1991 64.28)",
  yellow800: "oklch(52.79% 0.1496 54.65)",
  yellow900: "oklch(30.83% 0.099 45.48)",
} as const;

/**
 * Yellow color scale for dark mode
 */
export const yellowDark = {
  yellow50: "oklch(22.46% 0.0538 76.04)",
  yellow100: "oklch(24.95% 0.0642 64.78)",
  yellow200: "oklch(32.34% 0.0837 63.83)",
  yellow300: "oklch(35.53% 0.0903 66.29707162673735)",
  yellow400: "oklch(41.55% 0.1044 67.98)",
  yellow500: "oklch(75.04% 0.1737 74.49)",
  yellow600: "oklch(81.87% 0.1969 76.46)",
  yellow700: "oklch(77.21% 0.1991 64.28)",
  yellow800: "oklch(77.21% 0.1991 64.28)",
  yellow900: "oklch(96.7% 0.0418 84.59)",
} as const;

export type YellowScale = typeof yellow;
export type YellowDarkScale = typeof yellowDark;
