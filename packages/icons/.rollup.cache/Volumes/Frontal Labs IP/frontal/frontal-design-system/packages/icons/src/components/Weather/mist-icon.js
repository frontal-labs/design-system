import { jsx as _jsx } from "react/jsx-runtime";
export function MistIcon({
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
		"aria-label": "Mist Fog Weather",
		"aria-labelledby": "Mist Fog Weather",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H7V11H2V9ZM9 9H12V11H9V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H15V16H12V14ZM17 14H22V16H17V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z",
		}),
	});
}
MistIcon.displayName = "MistIcon";
export default MistIcon;
//# sourceMappingURL=mist-icon.js.map
