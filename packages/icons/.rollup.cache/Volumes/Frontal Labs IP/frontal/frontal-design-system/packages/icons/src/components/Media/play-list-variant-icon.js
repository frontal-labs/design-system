import { jsx as _jsx } from "react/jsx-runtime";
export function PlayListVariantIcon({
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
		"aria-label": "Play List Media",
		"aria-labelledby": "Play List Media",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM4 7.1085V9.8915L6.22641 8.5L4 7.1085ZM22 4V6H12V4H22Z",
		}),
	});
}
PlayListVariantIcon.displayName = "PlayListVariantIcon";
export default PlayListVariantIcon;
//# sourceMappingURL=play-list-variant-icon.js.map
