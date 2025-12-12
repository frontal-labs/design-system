import { jsx as _jsx } from "react/jsx-runtime";
export function FolderOpenIcon({
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
		"aria-label": "Folder Open Document",
		"aria-labelledby": "Folder Open Document",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H20C20.5523 5 21 5.44772 21 6V9H19V7H11.5858L9.58579 5H4V16.998L5.5 11H22.5L20.1894 20.2425C20.0781 20.6877 19.6781 21 19.2192 21H3ZM19.9384 13H7.06155L5.56155 19H18.4384L19.9384 13Z",
		}),
	});
}
FolderOpenIcon.displayName = "FolderOpenIcon";
export default FolderOpenIcon;
//# sourceMappingURL=folder-open-icon.js.map
