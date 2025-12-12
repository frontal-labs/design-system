import { jsx as _jsx } from "react/jsx-runtime";
export function AlignJustifyIcon({
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
		"aria-label": "Align Justify Text",
		"aria-labelledby": "Align Justify Text",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z",
		}),
	});
}
AlignJustifyIcon.displayName = "AlignJustifyIcon";
export default AlignJustifyIcon;
//# sourceMappingURL=align-justify-icon.js.map
