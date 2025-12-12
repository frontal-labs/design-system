import { jsx as _jsx } from "react/jsx-runtime";
export function BracketsIcon({
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
		"aria-label": "Brackets",
		"aria-labelledby": "Brackets",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M9 3V5H6V19H9V21H4V3H9ZM15 3H20V21H15V19H18V5H15V3Z",
		}),
	});
}
BracketsIcon.displayName = "BracketsIcon";
export default BracketsIcon;
//# sourceMappingURL=brackets-icon.js.map
