// @frontal/colors - Semantic color tokens

/**
 * Semantic color tokens for light mode
 * These map to CSS custom properties
 */
export const semantic = {
	background: "oklch(1 0 0)",
	foreground: "oklch(0.145 0 0)",

	card: "oklch(0.99 0 0)",
	cardForeground: "oklch(0.145 0 0)",

	popover: "oklch(1 0 0)",
	popoverForeground: "oklch(0.145 0 0)",

	primary: "oklch(0.205 0 0)",
	primaryForeground: "oklch(0.985 0 0)",

	secondary: "oklch(0.96 0 0)",
	secondaryForeground: "oklch(0.205 0 0)",

	muted: "oklch(0.97 0 0)",
	mutedForeground: "oklch(0.556 0 0)",

	accent: "oklch(0.97 0 0)",
	accentForeground: "oklch(0.205 0 0)",

	destructive: "oklch(0.577 0.245 27.325)",

	border: "oklch(90% 0 0)",
	input: "oklch(98.5% 0 0)",
	ring: "oklch(57.61% 0.2508 258.23)",

	chart1: "oklch(0.57 0.2145 258.25)",
	chart2: "oklch(0.205 0 0)",
	chart3: "oklch(0.8052 0.1699 74.19)",
	chart4: "oklch(0.7858 0.1937 155.14)",
	chart5: "oklch(0.6559 0.2328 34.52)",

	sidebar: "oklch(0.985 0 0)",
	sidebarForeground: "oklch(0.145 0 0)",
	sidebarPrimary: "oklch(0.205 0 0)",
	sidebarPrimaryForeground: "oklch(0.985 0 0)",
	sidebarAccent: "oklch(0% 0 0 / 0.078)",
	sidebarAccentForeground: "oklch(0.205 0 0)",
	sidebarMuted: "oklch(0% 0 0 / 0.078)",
	sidebarMutedForeground: "oklch(0.705 0.015 286.067)",
	sidebarBorder: "oklch(0.922 0 0)",
	sidebarRing: "oklch(0.708 0 0)",

	surface: "oklch(98.5% 0 0)",
	surfaceForeground: "oklch(0.145 0 0)",

	code: "oklch(98.5% 0 0)",
	codeForeground: "oklch(0.145 0 0)",
	codeHighlight: "oklch(0.96 0 0)",
	codeNumber: "oklch(0.56 0 0)",

	selection: "oklch(0.145 0 0)",
	selectionForeground: "oklch(1 0 0)",
} as const;

/**
 * Semantic color tokens for dark mode
 */
export const semanticDark = {
	background: "oklch(0 0 0)",
	foreground: "oklch(0.985 0 0)",

	card: "oklch(17% 0 0)",
	cardForeground: "oklch(0.985 0 0)",

	popover: "oklch(15% 0 0)",
	popoverForeground: "oklch(0.985 0 0)",

	primary: "oklch(0.922 0 0)",
	primaryForeground: "oklch(0.205 0 0)",

	secondary: "oklch(0.22 0 0)",
	secondaryForeground: "oklch(0.985 0 0)",

	muted: "oklch(0.2 0 0)",
	mutedForeground: "oklch(0.82 0 236)",

	accent: "oklch(0.22 0 0)",
	accentForeground: "oklch(0.985 0 0)",

	destructive: "oklch(0.577 0.245 22.325)",

	border: "oklch(26.5% 0 0)",
	input: "oklch(15% 0 0)",
	ring: "oklch(57.61% 0.2508 258.23)",

	chart1: "oklch(0.57 0.2145 258.25)",
	chart2: "oklch(0.985 0 0)",
	chart3: "oklch(0.8052 0.1699 74.19)",
	chart4: "oklch(0.7858 0.1937 155.14)",
	chart5: "oklch(0.6559 0.2328 34.52)",

	sidebar: "oklch(0.205 0 0)",
	sidebarForeground: "oklch(0.985 0 0)",
	sidebarPrimary: "oklch(0.488 0.243 264.376)",
	sidebarPrimaryForeground: "oklch(0.985 0 0)",
	sidebarAccent: "oklch(0.22 0 0)",
	sidebarAccentForeground: "oklch(0.985 0 0)",
	sidebarMuted: "oklch(0.2 0 0)",
	sidebarMutedForeground: "oklch(0.82 0 236)",
	sidebarBorder: "oklch(1 0 0 / 10%)",
	sidebarRing: "oklch(0.439 0 0)",

	surface: "oklch(14% 0 0)",
	surfaceForeground: "oklch(0.985 0 0)",

	code: "oklch(14% 0 0)",
	codeForeground: "oklch(0.985 0 0)",
	codeHighlight: "oklch(0.27 0 0)",
	codeNumber: "oklch(0.72 0 0)",

	selection: "oklch(0.922 0 0)",
	selectionForeground: "oklch(0.205 0 0)",
} as const;

export type SemanticColors = typeof semantic;
export type SemanticDarkColors = typeof semanticDark;
