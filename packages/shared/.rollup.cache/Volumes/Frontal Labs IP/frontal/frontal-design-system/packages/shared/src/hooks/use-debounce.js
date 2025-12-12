"use client";
import { useEffect, useState } from "react";
/**
 * Hook that debounces a value
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 500ms)
 * @returns The debounced value
 */
export function useDebounce(value, delay) {
	if (delay === void 0) {
		delay = 500;
	}
	var _a = useState(value),
		debouncedValue = _a[0],
		setDebouncedValue = _a[1];
	useEffect(() => {
		var handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}
//# sourceMappingURL=use-debounce.js.map
