import type { IconProps } from "./types";

/**
 * Normalize size value to a number or string
 */
export function normalizeSize(size?: number | string): number | string {
	if (size === undefined || size === null) {
		return 24;
	}
	return size;
}

/**
 * Normalize color value
 */
export function normalizeColor(color?: string): string {
	return color ?? "currentColor";
}

/**
 * Get icon props with defaults applied
 */
export function getIconProps(
	props?: Partial<IconProps>,
): Required<Pick<IconProps, "size" | "color">> &
	Omit<IconProps, "size" | "color"> {
	return {
		size: normalizeSize(props?.size),
		color: normalizeColor(props?.color),
		...props,
	};
}

/**
 * Convert PascalCase to kebab-case
 */
function toKebabCase(str: string): string {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Extract icon name from component name
 * Example: "ExpandDiagonalSIcon" -> "expand-diagonal-s"
 */
export function extractIconName(componentName: string): string {
	const withoutIcon = componentName.replace(/Icon$/, "");
	return toKebabCase(withoutIcon);
}

/**
 * Extract category from path
 * Example: "Arrows/expand-diagonal-s" -> "Arrows"
 */
export function extractCategory(path: string): string {
	const parts = path.split("/");
	return parts.length > 1 ? (parts[0] ?? "Other") : "Other";
}
