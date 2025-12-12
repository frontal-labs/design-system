import { jsx as _jsx } from "react/jsx-runtime";
export function TerminalIcon({
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
		"aria-label": "Terminal",
		"aria-labelledby": "Terminal",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z",
		}),
	});
}
TerminalIcon.displayName = "TerminalIcon";
export default TerminalIcon;
//# sourceMappingURL=terminal-icon.js.map
