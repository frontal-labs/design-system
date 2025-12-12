import { jsx as _jsx } from "react/jsx-runtime";
export function FlashlightIcon({
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
		"aria-label": "Flashlight Light Beam",
		"aria-labelledby": "Flashlight Light Beam",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z",
		}),
	});
}
FlashlightIcon.displayName = "FlashlightIcon";
export default FlashlightIcon;
//# sourceMappingURL=flashlight-icon.js.map
