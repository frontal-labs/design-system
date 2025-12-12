import { jsx as _jsx } from "react/jsx-runtime";
export function FlipVerticalVariantIcon({
	width = 24,
	height = 24,
	color = "currentColor",
	...props
}) {
	return _jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		width: width,
		height: height,
		fill: color,
		"aria-label": "Flip Vertical Arrow",
		"aria-labelledby": "Flip Vertical Arrow",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM8 10L12 6L16 10H13V14H16L12 18L8 14H11V10L8 10Z",
		}),
	});
}
FlipVerticalVariantIcon.displayName = "FlipVerticalVariantIcon";
export default FlipVerticalVariantIcon;
//# sourceMappingURL=flip-vertical-variant-icon.js.map
