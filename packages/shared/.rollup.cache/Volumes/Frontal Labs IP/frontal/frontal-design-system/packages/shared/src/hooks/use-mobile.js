"use client";
import { useMediaQuery } from "./use-media-query";
var MOBILE_BREAKPOINT = 768;
/**
 * Hook that returns whether the current viewport is mobile-sized
 * Uses a breakpoint of 768px (standard mobile breakpoint)
 * @returns boolean indicating if the viewport is mobile-sized
 */
export function useIsMobile() {
    return useMediaQuery("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
}
//# sourceMappingURL=use-mobile.js.map