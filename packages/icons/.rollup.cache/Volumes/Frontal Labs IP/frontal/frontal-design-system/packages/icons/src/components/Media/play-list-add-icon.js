import { jsx as _jsx } from "react/jsx-runtime";
export function PlayListAddIcon({
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
		"aria-label": "List Plus Add",
		"aria-labelledby": "List Plus Add",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M2 18H12V20H2V18ZM2 11H22V13H2V11ZM2 4H22V6H2V4ZM18 18V15H20V18H23V20H20V23H18V20H15V18H18Z",
		}),
	});
}
PlayListAddIcon.displayName = "PlayListAddIcon";
export default PlayListAddIcon;
//# sourceMappingURL=play-list-add-icon.js.map
