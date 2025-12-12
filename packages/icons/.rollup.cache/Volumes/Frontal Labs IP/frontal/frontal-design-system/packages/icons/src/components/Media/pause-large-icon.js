import { jsx as _jsx } from "react/jsx-runtime";
export function PauseLargeIcon({
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
		children: _jsx("path", { d: "M6 3H8V21H6V3ZM16 3H18V21H16V3Z" }),
	});
}
PauseLargeIcon.displayName = "PauseLargeIcon";
export default PauseLargeIcon;
//# sourceMappingURL=pause-large-icon.js.map
