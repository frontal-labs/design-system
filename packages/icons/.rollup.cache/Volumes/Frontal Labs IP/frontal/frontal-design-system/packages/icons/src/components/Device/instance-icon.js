import { jsx as _jsx } from "react/jsx-runtime";
export function InstanceIcon({
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
		"aria-label": "Device Computer Server",
		"aria-labelledby": "Device Computer Server",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311ZM12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.49896 9.97065L11 12.5765V17.625H13V12.5765L17.501 9.97066L16.499 8.2398L12 10.8445L7.50104 8.2398L6.49896 9.97065Z",
		}),
	});
}
InstanceIcon.displayName = "InstanceIcon";
export default InstanceIcon;
//# sourceMappingURL=instance-icon.js.map
