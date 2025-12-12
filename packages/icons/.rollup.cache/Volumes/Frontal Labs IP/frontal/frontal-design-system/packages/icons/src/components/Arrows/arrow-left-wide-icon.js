import { jsx as _jsx } from "react/jsx-runtime";
export function ArrowLeftWideIcon({
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
		"aria-label": "Arrow Left Wide",
		"aria-labelledby": "Arrow Left Wide",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z",
		}),
	});
}
ArrowLeftWideIcon.displayName = "ArrowLeftWideIcon";
export default ArrowLeftWideIcon;
//# sourceMappingURL=arrow-left-wide-icon.js.map
