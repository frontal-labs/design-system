// @frontal-labs/colors - Pink color scale

/**
 * Pink color scale values in OKLCH format
 */
export const pink = {
  pink50: "oklch(95.69% 0.0359 344.6218910697224)",
  pink100: "oklch(95.71% 0.0321 353.14)",
  pink200: "oklch(93.83% 0.0451 356.29)",
  pink300: "oklch(91.12% 0.0573 358.82)",
  pink400: "oklch(84.28% 0.0915 356.99)",
  pink500: "oklch(74.33% 0.1547 0.24)",
  pink600: "oklch(63.52% 0.238 1.01)",
  pink700: "oklch(59.51% 0.2339 4.21)",
  pink800: "oklch(53.5% 0.2058 2.84)",
  pink900: "oklch(26% 0.0977 359)",
} as const;

/**
 * Pink color scale for dark mode
 */
export const pinkDark = {
  pink50: "oklch(22.67% 0.0628 354.73)",
  pink100: "oklch(26.2% 0.0859 356.68)",
  pink200: "oklch(31.15% 0.1067 355.93)",
  pink300: "oklch(32.13% 0.1174 356.71)",
  pink400: "oklch(37.01% 0.1453 358.39)",
  pink500: "oklch(50.33% 0.2089 4.33)",
  pink600: "oklch(63.52% 0.2346 1.01)",
  pink700: "oklch(59.51% 0.2429 4.21)",
  pink800: "oklch(69.36% 0.2223 3.91)",
  pink900: "oklch(95.74% 0.0326 350.08)",
} as const;

export type PinkScale = typeof pink;
export type PinkDarkScale = typeof pinkDark;
