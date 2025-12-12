import { jsx as _jsx } from "react/jsx-runtime";
export function ArrowRightSIcon({
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
		"aria-label": "Arrow Right Direction",
		"aria-labelledby": "Arrow Right Direction",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z",
		}),
	});
}
ArrowRightSIcon.displayName = "ArrowRightSIcon";
export default ArrowRightSIcon;
//# sourceMappingURL=arrow-right-s-icon.js.map
