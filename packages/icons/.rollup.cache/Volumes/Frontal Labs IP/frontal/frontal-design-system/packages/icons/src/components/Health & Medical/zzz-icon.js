import { jsx as _jsx } from "react/jsx-runtime";
export function ZzzIcon({
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
		"aria-label": "Sleep Zzz Doze",
		"aria-labelledby": "Sleep Zzz Doze",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M11 11V13L5.67257 19H11V21H3V19L8.32557 13H3V11H11ZM21 3V5L15.6726 11H21V13H13V11L18.3256 5H13V3H21Z",
		}),
	});
}
ZzzIcon.displayName = "ZzzIcon";
export default ZzzIcon;
//# sourceMappingURL=zzz-icon.js.map
