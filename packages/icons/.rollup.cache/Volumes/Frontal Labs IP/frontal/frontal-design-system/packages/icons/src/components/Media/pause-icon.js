import { jsx as _jsx } from "react/jsx-runtime";
export function PauseIcon({
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
		"aria-label": "Pause Media Control",
		"aria-labelledby": "Pause Media Control",
		"aria-hidden": true,
		...props,
		children: _jsx("path", { d: "M6 5H8V19H6V5ZM16 5H18V19H16V5Z" }),
	});
}
PauseIcon.displayName = "PauseIcon";
export default PauseIcon;
//# sourceMappingURL=pause-icon.js.map
