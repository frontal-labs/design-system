import { jsx as _jsx } from "react/jsx-runtime";
export function BarChartIcon({
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
		"aria-label": "Bar Chart Statistics Data",
		"aria-labelledby": "Bar Chart Statistics Data",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z",
		}),
	});
}
BarChartIcon.displayName = "BarChartIcon";
export default BarChartIcon;
//# sourceMappingURL=bar-chart-icon.js.map
