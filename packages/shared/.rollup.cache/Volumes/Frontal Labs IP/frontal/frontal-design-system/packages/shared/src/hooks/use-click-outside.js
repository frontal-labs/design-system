"use client";
import { useEffect, useRef } from "react";
/**
 * Hook that handles clicks outside of the passed ref
 * @param handler - Function to call when click outside occurs
 * @returns Ref to attach to the element
 */
export function useClickOutside(handler) {
	var ref = useRef(null);
	useEffect(() => {
		var listener = (event) => {
			var el = ref === null || ref === void 0 ? void 0 : ref.current;
			if (!el || el.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [handler]);
	return ref;
}
//# sourceMappingURL=use-click-outside.js.map
