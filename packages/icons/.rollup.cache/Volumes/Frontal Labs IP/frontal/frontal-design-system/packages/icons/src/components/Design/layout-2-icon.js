import { jsx as _jsx } from "react/jsx-runtime";
export function Layout_2Icon({
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
		"aria-label": "Layout Grid Panels",
		"aria-labelledby": "Layout Grid Panels",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20ZM11 5H5V19H11V5ZM19 13H13V19H19V13ZM19 5H13V11H19V5Z",
		}),
	});
}
Layout_2Icon.displayName = "Layout_2Icon";
export default Layout_2Icon;
//# sourceMappingURL=layout-2-icon.js.map
