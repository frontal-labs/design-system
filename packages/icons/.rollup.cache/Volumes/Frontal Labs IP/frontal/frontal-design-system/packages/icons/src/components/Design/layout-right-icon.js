import { jsx as _jsx } from "react/jsx-runtime";
export function LayoutRightIcon({
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
		"aria-label": "Layout Split Right",
		"aria-labelledby": "Layout Split Right",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM15 5H4V19H15V5ZM20 5H17V19H20V5Z",
		}),
	});
}
LayoutRightIcon.displayName = "LayoutRightIcon";
export default LayoutRightIcon;
//# sourceMappingURL=layout-right-icon.js.map
