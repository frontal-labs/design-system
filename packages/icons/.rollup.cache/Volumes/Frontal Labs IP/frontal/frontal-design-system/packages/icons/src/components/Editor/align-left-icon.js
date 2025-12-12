import { jsx as _jsx } from "react/jsx-runtime";
export function AlignLeftIcon({
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
		"aria-label": "Align Left Text",
		"aria-labelledby": "Align Left Text",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z",
		}),
	});
}
AlignLeftIcon.displayName = "AlignLeftIcon";
export default AlignLeftIcon;
//# sourceMappingURL=align-left-icon.js.map
