import { jsx as _jsx } from "react/jsx-runtime";
export function LogoutBoxIcon({
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
		"aria-label": "Logout Box",
		"aria-labelledby": "Logout Box",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z",
		}),
	});
}
LogoutBoxIcon.displayName = "LogoutBoxIcon";
export default LogoutBoxIcon;
//# sourceMappingURL=logout-box-icon.js.map
