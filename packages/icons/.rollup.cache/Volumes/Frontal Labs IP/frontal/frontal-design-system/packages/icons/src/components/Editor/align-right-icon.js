import { jsx as _jsx } from "react/jsx-runtime";
export function AlignRightIcon({
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
		"aria-label": "Align Right",
		"aria-labelledby": "Align Right",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z",
		}),
	});
}
AlignRightIcon.displayName = "AlignRightIcon";
export default AlignRightIcon;
//# sourceMappingURL=align-right-icon.js.map
