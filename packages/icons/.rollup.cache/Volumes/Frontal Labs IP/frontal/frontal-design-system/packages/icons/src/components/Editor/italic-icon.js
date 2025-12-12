import { jsx as _jsx } from "react/jsx-runtime";
export function ItalicIcon({
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
		"aria-label": "Italic Text Format",
		"aria-labelledby": "Italic Text Format",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z",
		}),
	});
}
ItalicIcon.displayName = "ItalicIcon";
export default ItalicIcon;
//# sourceMappingURL=italic-icon.js.map
