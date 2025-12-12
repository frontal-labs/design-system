import { jsx as _jsx } from "react/jsx-runtime";
export function FileWordIcon({
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
		"aria-label": "File Word",
		"aria-labelledby": "File Word",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M16 8V16H14L12 14L10 16H8V8H10V13L12 11L14 13V8H15V4H5V20H19V8H16ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z",
		}),
	});
}
FileWordIcon.displayName = "FileWordIcon";
export default FileWordIcon;
//# sourceMappingURL=file-word-icon.js.map
