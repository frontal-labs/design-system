import type { ComponentProps, ElementType } from "react";

type EventHandler = (...args: any[]) => void;

/**
 * Merges multiple props objects intelligently:
 * - Event handlers are chained
 * - className values are concatenated
 * - style objects are merged
 * - Other props are overwritten (last wins)
 */
export function mergeProps<T extends ElementType>(
	...propObjects: Array<ComponentProps<T> | undefined | null>
): ComponentProps<T> {
	const result: Record<string, any> = {};

	for (const props of propObjects) {
		if (!props) continue;

		for (const key in props) {
			if (!Object.hasOwn(props, key)) continue;

			const value = props[key];

			// Handle event handlers (functions starting with 'on' and uppercase second letter)
			if (
				typeof key === "string" &&
				key.length > 2 &&
				key.startsWith("on") &&
				key[2] === key[2]?.toUpperCase() &&
				typeof value === "function"
			) {
				const existingHandler = result[key] as EventHandler | undefined;
				if (existingHandler) {
					result[key] = (...args: any[]) => {
						existingHandler(...args);
						(value as EventHandler)(...args);
					};
				} else {
					result[key] = value;
				}
			}
			// Handle className - concatenate strings
			else if (key === "className") {
				const existing = result[key];
				if (existing && value) {
					result[key] = `${existing} ${value}`;
				} else {
					result[key] = value || existing;
				}
			}
			// Handle style - merge objects
			else if (key === "style" && typeof value === "object" && value !== null) {
				const existing = result[key];
				if (existing && typeof existing === "object") {
					result[key] = { ...existing, ...value };
				} else {
					result[key] = value;
				}
			}
			// For all other props, last wins (overwrite)
			else {
				result[key] = value;
			}
		}
	}

	return result as ComponentProps<T>;
}
