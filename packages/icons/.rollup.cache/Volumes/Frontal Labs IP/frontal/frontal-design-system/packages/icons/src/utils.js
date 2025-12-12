/**
 * Normalize size value to a number or string
 */
export function normalizeSize(size) {
	if (size === undefined || size === null) {
		return 24;
	}
	return size;
}
/**
 * Normalize color value
 */
export function normalizeColor(color) {
	return color ?? "currentColor";
}
/**
 * Get icon props with defaults applied
 */
export function getIconProps(props) {
	return {
		size: normalizeSize(props?.size),
		color: normalizeColor(props?.color),
		...props,
	};
}
/**
 * Convert PascalCase to kebab-case
 */
function toKebabCase(str) {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
/**
 * Extract icon name from component name
 * Example: "ExpandDiagonalSIcon" -> "expand-diagonal-s"
 */
export function extractIconName(componentName) {
	const withoutIcon = componentName.replace(/Icon$/, "");
	return toKebabCase(withoutIcon);
}
/**
 * Extract category from path
 * Example: "Arrows/expand-diagonal-s" -> "Arrows"
 */
export function extractCategory(path) {
	const parts = path.split("/");
	return parts.length > 1 ? parts[0] : "Other";
}
//# sourceMappingURL=utils.js.map
