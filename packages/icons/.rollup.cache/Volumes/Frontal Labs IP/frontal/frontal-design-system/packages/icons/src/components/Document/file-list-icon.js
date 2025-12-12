import { jsx as _jsx } from "react/jsx-runtime";
export function FileListIcon({
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
		"aria-label": "Document File List",
		"aria-labelledby": "Document File List",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z",
		}),
	});
}
FileListIcon.displayName = "FileListIcon";
export default FileListIcon;
//# sourceMappingURL=file-list-icon.js.map
