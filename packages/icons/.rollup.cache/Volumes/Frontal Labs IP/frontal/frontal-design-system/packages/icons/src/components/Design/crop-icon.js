import { jsx as _jsx } from "react/jsx-runtime";
export function CropIcon({
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
		"aria-label": "Crop",
		"aria-labelledby": "Crop",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM17 22V7H9V5H18C18.5523 5 19 5.44772 19 6V17H22V19H19V22H17Z",
		}),
	});
}
CropIcon.displayName = "CropIcon";
export default CropIcon;
//# sourceMappingURL=crop-icon.js.map
