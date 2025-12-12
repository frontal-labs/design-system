import { jsx as _jsx } from "react/jsx-runtime";
export function FullscreenIcon({
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
		"aria-label": "Fullscreen Expand Screen",
		"aria-labelledby": "Fullscreen Expand Screen",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z",
		}),
	});
}
FullscreenIcon.displayName = "FullscreenIcon";
export default FullscreenIcon;
//# sourceMappingURL=fullscreen-icon.js.map
