import { jsx as _jsx } from "react/jsx-runtime";
export function HourglassVariantIcon({
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
		"aria-label": "Hourglass Variant",
		"aria-labelledby": "Hourglass Variant",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z",
		}),
	});
}
HourglassVariantIcon.displayName = "HourglassVariantIcon";
export default HourglassVariantIcon;
//# sourceMappingURL=hourglass-variant-icon.js.map
