import { jsx as _jsx } from "react/jsx-runtime";
export function ServerIcon({
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
		"aria-label": "Server Device Hardware",
		"aria-labelledby": "Server Device Hardware",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M5 11H19V5H5V11ZM21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4ZM19 13H5V19H19V13ZM7 15H10V17H7V15ZM7 7H10V9H7V7Z",
		}),
	});
}
ServerIcon.displayName = "ServerIcon";
export default ServerIcon;
//# sourceMappingURL=server-icon.js.map
