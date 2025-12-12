import { jsx as _jsx } from "react/jsx-runtime";
export function HonourIcon({
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
		"aria-label": "Honour",
		"aria-labelledby": "Honour",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M21 4V18.7215C21 18.9193 20.8833 19.0986 20.7024 19.1787L12 23.0313L3.29759 19.1787C3.11667 19.0986 3 18.9193 3 18.7215V4H1V2H23V4H21ZM5 4V17.7451L12 20.8441L19 17.7451V4H5ZM8 8H16V10H8V8ZM8 12H16V14H8V12Z",
		}),
	});
}
HonourIcon.displayName = "HonourIcon";
export default HonourIcon;
//# sourceMappingURL=honour-icon.js.map
