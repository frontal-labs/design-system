import { jsx as _jsx } from "react/jsx-runtime";
export function VercelIcon({
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
		"aria-label": "Vercel",
		"aria-labelledby": "Vercel",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M23 21.6479L12 2.35205L1 21.6479H23ZM19.5577 19.6479H4.4423L12 6.39042L19.5577 19.6479Z",
		}),
	});
}
VercelIcon.displayName = "VercelIcon";
export default VercelIcon;
//# sourceMappingURL=vercel-icon.js.map
