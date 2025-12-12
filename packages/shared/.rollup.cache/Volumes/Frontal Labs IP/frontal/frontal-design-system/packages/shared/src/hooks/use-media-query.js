"use client";
import { useEffect, useState } from "react";
/**
 * Hook that returns whether a media query matches
 * @param query - The media query string (e.g., "(max-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query) {
    var _a = useState(undefined), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        if (typeof window === "undefined")
            return;
        var mediaQuery = window.matchMedia(query);
        // Set initial value
        setMatches(mediaQuery.matches);
        // Create handler
        var handler = function (event) {
            setMatches(event.matches);
        };
        // Add listener (modern browsers)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handler);
            return function () { return mediaQuery.removeEventListener("change", handler); };
        }
        else {
            // Fallback for older browsers
            mediaQuery.addListener(handler);
            return function () { return mediaQuery.removeListener(handler); };
        }
    }, [query]);
    return matches !== null && matches !== void 0 ? matches : false;
}
//# sourceMappingURL=use-media-query.js.map