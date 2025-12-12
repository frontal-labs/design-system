import { jsx as _jsx } from "react/jsx-runtime";
export function FileCheckIcon({
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
		"aria-label": "File Document Check",
		"aria-labelledby": "File Document Check",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M12 20V22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9998 7V14H19V8H15V4H5V20H12ZM14.4646 19.4647L18.0001 23.0002L22.9498 18.0505L21.5356 16.6362L18.0001 20.1718L15.8788 18.0505L14.4646 19.4647Z",
		}),
	});
}
FileCheckIcon.displayName = "FileCheckIcon";
export default FileCheckIcon;
//# sourceMappingURL=file-check-icon.js.map
