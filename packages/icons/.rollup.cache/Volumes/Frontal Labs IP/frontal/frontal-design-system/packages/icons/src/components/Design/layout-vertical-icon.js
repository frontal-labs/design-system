import { jsx as _jsx } from "react/jsx-runtime";
export function LayoutVerticalIcon({
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
		"aria-label": "Layout Vertical Columns",
		"aria-labelledby": "Layout Vertical Columns",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM15 7V17H17V7H15ZM11 7L11 17H13V7H11ZM7 17L7 7L9 7L9 17H7Z",
		}),
	});
}
LayoutVerticalIcon.displayName = "LayoutVerticalIcon";
export default LayoutVerticalIcon;
//# sourceMappingURL=layout-vertical-icon.js.map
