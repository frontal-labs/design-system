import { jsx as _jsx } from "react/jsx-runtime";
export function StrikethroughVariantIcon({
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
		"aria-label": "Strikethrough Text Editor",
		"aria-labelledby": "Strikethrough Text Editor",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M13 9H11V6H5V4H19V6H13V9ZM13 15V20H11V15H13ZM3 11H21V13H3V11Z",
		}),
	});
}
StrikethroughVariantIcon.displayName = "StrikethroughVariantIcon";
export default StrikethroughVariantIcon;
//# sourceMappingURL=strikethrough-variant-icon.js.map
