"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the current viewport is mobile-sized.
 * Uses a media query to detect screens smaller than 768px (typical mobile breakpoint).
 *
 * @returns {boolean} True if the viewport is mobile-sized, false otherwise
 */
export function useIsMobile(): boolean {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		// Set initial value
		setIsMobile(mediaQuery.matches);

		// Create event handler
		const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile(event.matches);
		};

		// Add listener (using addEventListener if available, otherwise addListener for older browsers)
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", handleChange);
		} else {
			// Fallback for older browsers
			mediaQuery.addListener(handleChange);
		}

		// Cleanup
		return () => {
			if (mediaQuery.removeEventListener) {
				mediaQuery.removeEventListener("change", handleChange);
			} else {
				// Fallback for older browsers
				mediaQuery.removeListener(handleChange);
			}
		};
	}, []);

	return isMobile;
}
