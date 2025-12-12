import { jsx as _jsx } from "react/jsx-runtime";
export function InfoIIcon({
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
		"aria-label": "Info Information I",
		"aria-labelledby": "Info Information I",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z",
		}),
	});
}
InfoIIcon.displayName = "InfoIIcon";
export default InfoIIcon;
//# sourceMappingURL=info-i-icon.js.map
