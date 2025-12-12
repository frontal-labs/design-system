import { jsx as _jsx } from "react/jsx-runtime";
export function ExpandLeftIcon({
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
		"aria-label": "Expand Left",
		"aria-labelledby": "Expand Left",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M10.071 4.92896L11.4852 6.34317L6.82834 11L16.0002 11.0002L16.0002 13.0002L6.82839 13L11.4852 17.6569L10.071 19.0711L2.99994 12L10.071 4.92896ZM18.0001 19V4.99997H20.0001V19H18.0001Z",
		}),
	});
}
ExpandLeftIcon.displayName = "ExpandLeftIcon";
export default ExpandLeftIcon;
//# sourceMappingURL=expand-left-icon.js.map
