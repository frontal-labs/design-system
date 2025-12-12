"use client";

import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

/**
 * Hook that handles clicks outside of the passed ref
 * @param handler - Function to call when click outside occurs
 * @returns Ref to attach to the element
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
	handler: Handler,
) {
	const ref = useRef<T>(null);

	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const el = ref?.current;
			if (!el || el.contains(event.target as Node)) {
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
