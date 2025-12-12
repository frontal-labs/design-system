import { jsx as _jsx } from "react/jsx-runtime";
export function DownloadVariantIcon({
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
		"aria-label": "Download Arrow Down File",
		"aria-labelledby": "Download Arrow Down File",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z",
		}),
	});
}
DownloadVariantIcon.displayName = "DownloadVariantIcon";
export default DownloadVariantIcon;
//# sourceMappingURL=download-variant-icon.js.map
