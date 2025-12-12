import { jsx as _jsx } from "react/jsx-runtime";
export function TextBlockIcon({
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
		"aria-label": "Text Block Document",
		"aria-labelledby": "Text Block Document",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M1 2V5H3V4H5V9H3.5V11H8.5V9H7V4H9V5H11V2H1ZM21 3H14V5H20V19H4V14H2V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3Z",
		}),
	});
}
TextBlockIcon.displayName = "TextBlockIcon";
export default TextBlockIcon;
//# sourceMappingURL=text-block-icon.js.map
