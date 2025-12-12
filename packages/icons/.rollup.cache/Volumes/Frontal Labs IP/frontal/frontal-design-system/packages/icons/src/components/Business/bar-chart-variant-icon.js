import { jsx as _jsx } from "react/jsx-runtime";
export function BarChartVariantIcon({
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
		"aria-label": "Bar Chart Variant",
		"aria-labelledby": "Bar Chart Variant",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z",
		}),
	});
}
BarChartVariantIcon.displayName = "BarChartVariantIcon";
export default BarChartVariantIcon;
//# sourceMappingURL=bar-chart-variant-icon.js.map
