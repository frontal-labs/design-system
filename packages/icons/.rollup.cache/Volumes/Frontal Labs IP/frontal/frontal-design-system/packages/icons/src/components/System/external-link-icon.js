import { jsx as _jsx } from "react/jsx-runtime";
export function ExternalLinkIcon({
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
		"aria-label": "External Link Arrow",
		"aria-labelledby": "External Link Arrow",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z",
		}),
	});
}
ExternalLinkIcon.displayName = "ExternalLinkIcon";
export default ExternalLinkIcon;
//# sourceMappingURL=external-link-icon.js.map
