import { jsx as _jsx } from "react/jsx-runtime";
export function HeadingIcon({
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
		"aria-label": "Heading",
		"aria-labelledby": "Heading",
		"aria-hidden": true,
		...props,
		children: _jsx("path", { d: "M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" }),
	});
}
HeadingIcon.displayName = "HeadingIcon";
export default HeadingIcon;
//# sourceMappingURL=heading-icon.js.map
