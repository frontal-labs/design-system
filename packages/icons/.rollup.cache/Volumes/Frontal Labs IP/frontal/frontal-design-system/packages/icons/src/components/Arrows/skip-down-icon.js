import { jsx as _jsx } from "react/jsx-runtime";
export function SkipDownIcon({
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
		"aria-label": "Arrow Down Skip",
		"aria-labelledby": "Arrow Down Skip",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M12 10.0858L7.20711 5.29291L5.79289 6.70712L12 12.9142L18.2071 6.70712L16.7929 5.29291L12 10.0858ZM18 17L6 17L6 15L18 15V17Z",
		}),
	});
}
SkipDownIcon.displayName = "SkipDownIcon";
export default SkipDownIcon;
//# sourceMappingURL=skip-down-icon.js.map
