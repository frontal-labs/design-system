import { jsx as _jsx } from "react/jsx-runtime";
export function FileTransferIcon({
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
		"aria-label": "File Transfer",
		"aria-labelledby": "File Transfer",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM12 11V8L16 12L12 16V13H8V11H12Z",
		}),
	});
}
FileTransferIcon.displayName = "FileTransferIcon";
export default FileTransferIcon;
//# sourceMappingURL=file-transfer-icon.js.map
