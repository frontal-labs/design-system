import { jsx as _jsx } from "react/jsx-runtime";
export function SeparatorIcon({
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
		"aria-label": "Separator Horizontal Divider",
		"aria-labelledby": "Separator Horizontal Divider",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z",
		}),
	});
}
SeparatorIcon.displayName = "SeparatorIcon";
export default SeparatorIcon;
//# sourceMappingURL=separator-icon.js.map
