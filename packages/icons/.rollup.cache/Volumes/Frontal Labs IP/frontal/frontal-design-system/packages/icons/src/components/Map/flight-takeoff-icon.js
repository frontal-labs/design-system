import { jsx as _jsx } from "react/jsx-runtime";
export function FlightTakeoffIcon({
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
		"aria-label": "Airplane Takeoff Flight",
		"aria-labelledby": "Airplane Takeoff Flight",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z",
		}),
	});
}
FlightTakeoffIcon.displayName = "FlightTakeoffIcon";
export default FlightTakeoffIcon;
//# sourceMappingURL=flight-takeoff-icon.js.map
