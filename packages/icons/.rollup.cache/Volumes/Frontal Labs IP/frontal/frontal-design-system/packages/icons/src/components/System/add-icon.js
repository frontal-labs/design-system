import { jsx as _jsx } from "react/jsx-runtime";
export function AddIcon({
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
		"aria-label": "Add Plus Create",
		"aria-labelledby": "Add Plus Create",
		"aria-hidden": true,
		...props,
		children: _jsx("path", { d: "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" }),
	});
}
AddIcon.displayName = "AddIcon";
export default AddIcon;
//# sourceMappingURL=add-icon.js.map
