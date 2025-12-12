"use client";

import {
	ThemeProvider as NextThemesProvider,
	useTheme as useNextTheme,
} from "next-themes";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

export function ThemeProvider({
	children,
	defaultTheme = "light",
	storageKey = "theme",
	...props
}: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme={defaultTheme}
			storageKey={storageKey}
			enableSystem={false}
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}

export function useTheme() {
	const { theme, setTheme } = useNextTheme();
	return {
		theme: (theme as Theme) || "light",
		setTheme: setTheme as (theme: Theme) => void,
	};
}
