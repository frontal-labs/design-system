import { jsx as _jsx } from "react/jsx-runtime";
export function FlutterIcon({
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
		"aria-label": "Flutter Logo Technology",
		"aria-labelledby": "Flutter Logo Technology",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M14.5979 10.6843H17.4264L11.7688 16.3419L17.4264 21.998H14.5979L8.94108 16.3412L14.5979 10.6843ZM14.4044 2.00439H17.2328L5.9191 13.3181L4.50488 11.9039L14.4044 2.00439Z",
		}),
	});
}
FlutterIcon.displayName = "FlutterIcon";
export default FlutterIcon;
//# sourceMappingURL=flutter-icon.js.map
