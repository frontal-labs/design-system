import { jsx as _jsx } from "react/jsx-runtime";
export function BatteryLowIcon({
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
		"aria-label": "Battery Low Power",
		"aria-labelledby": "Battery Low Power",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 7V17H18V7H4ZM3 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM5 8H9V16H5V8ZM21 9H23V15H21V9Z",
		}),
	});
}
BatteryLowIcon.displayName = "BatteryLowIcon";
export default BatteryLowIcon;
//# sourceMappingURL=battery-low-icon.js.map
