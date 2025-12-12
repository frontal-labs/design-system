import { jsx as _jsx } from "react/jsx-runtime";
export function ArchiveStackIcon({
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
		"aria-label": "Archive Stack",
		"aria-labelledby": "Archive Stack",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 5H20V3H4V5ZM20 9H4V7H20V9ZM3 11H10V13H14V11H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11ZM16 13V15H8V13H5V19H19V13H16Z",
		}),
	});
}
ArchiveStackIcon.displayName = "ArchiveStackIcon";
export default ArchiveStackIcon;
//# sourceMappingURL=archive-stack-icon.js.map
