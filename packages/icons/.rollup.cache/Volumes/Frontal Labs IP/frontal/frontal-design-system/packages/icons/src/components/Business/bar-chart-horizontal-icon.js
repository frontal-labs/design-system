import { jsx as _jsx } from "react/jsx-runtime";
export function BarChartHorizontalIcon({
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
		"aria-label": "Bar Chart Horizontal Statistics",
		"aria-labelledby": "Bar Chart Horizontal Statistics",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z",
		}),
	});
}
BarChartHorizontalIcon.displayName = "BarChartHorizontalIcon";
export default BarChartHorizontalIcon;
//# sourceMappingURL=bar-chart-horizontal-icon.js.map
