import { jsx as _jsx } from "react/jsx-runtime";
export function ExpandDiagonalIcon({
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
		"aria-label": "Expand Diagonal",
		"aria-labelledby": "Expand Diagonal",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M17.5858 5H14V3H21V10H19V6.41421L14.7071 10.7071L13.2929 9.29289L17.5858 5ZM3 14H5V17.5858L9.29289 13.2929L10.7071 14.7071L6.41421 19H10V21H3V14Z",
		}),
	});
}
ExpandDiagonalIcon.displayName = "ExpandDiagonalIcon";
export default ExpandDiagonalIcon;
//# sourceMappingURL=expand-diagonal-icon.js.map
