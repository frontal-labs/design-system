import { jsx as _jsx } from "react/jsx-runtime";
export function ArrowUpSIcon({
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
		"aria-label": "Arrow Up Direction",
		"aria-labelledby": "Arrow Up Direction",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z",
		}),
	});
}
ArrowUpSIcon.displayName = "ArrowUpSIcon";
export default ArrowUpSIcon;
//# sourceMappingURL=arrow-up-s-icon.js.map
