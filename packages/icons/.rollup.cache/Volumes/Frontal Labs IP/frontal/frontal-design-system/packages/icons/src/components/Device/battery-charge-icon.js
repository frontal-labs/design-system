import { jsx as _jsx } from "react/jsx-runtime";
export function BatteryChargeIcon({
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
		"aria-label": "Battery Charging Lightning",
		"aria-labelledby": "Battery Charging Lightning",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M8 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5H9.625L8.45833 7H4V17H8V19ZM12.375 19L13.5417 17H18V7H14V5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H12.375ZM21 9H23V15H21V9ZM12 11H15L10 19V13H7L12 5V11Z",
		}),
	});
}
BatteryChargeIcon.displayName = "BatteryChargeIcon";
export default BatteryChargeIcon;
//# sourceMappingURL=battery-charge-icon.js.map
