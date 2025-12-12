import { jsx as _jsx } from "react/jsx-runtime";
export function FullscreenExitIcon({
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
		"aria-label": "Fullscreen Exit Corner",
		"aria-labelledby": "Fullscreen Exit Corner",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z",
		}),
	});
}
FullscreenExitIcon.displayName = "FullscreenExitIcon";
export default FullscreenExitIcon;
//# sourceMappingURL=fullscreen-exit-icon.js.map
