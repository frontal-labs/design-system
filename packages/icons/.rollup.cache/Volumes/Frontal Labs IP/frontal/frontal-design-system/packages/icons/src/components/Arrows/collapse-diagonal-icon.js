import { jsx as _jsx } from "react/jsx-runtime";
export function CollapseDiagonalIcon({
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
		"aria-label": "Collapse Diagonal",
		"aria-labelledby": "Collapse Diagonal",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M15 4.00008H13V11.0001H20V9.00008H16.4142L20.7071 4.70718L19.2929 3.29297L15 7.58586V4.00008ZM4.00008 15H7.58586L3.29297 19.2929L4.70718 20.7071L9.00008 16.4142V20H11.0001V13H4.00008V15Z",
		}),
	});
}
CollapseDiagonalIcon.displayName = "CollapseDiagonalIcon";
export default CollapseDiagonalIcon;
//# sourceMappingURL=collapse-diagonal-icon.js.map
