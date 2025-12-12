"use client";

import { useEffect, useState } from "react";

/**
 * Hook that returns whether a media query matches
 * @param query - The media query string (e.g., "(max-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const mediaQuery = window.matchMedia(query);

		// Set initial value
		setMatches(mediaQuery.matches);

		// Create handler
		const handler = (event: MediaQueryListEvent | MediaQueryList) => {
			setMatches(event.matches);
		};

		// Add listener (modern browsers)
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", handler);
			return () => mediaQuery.removeEventListener("change", handler);
		} else {
			// Fallback for older browsers
			mediaQuery.addListener(handler);
			return () => mediaQuery.removeListener(handler);
		}
	}, [query]);

	return matches ?? false;
}
