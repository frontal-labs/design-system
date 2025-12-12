import { jsx as _jsx } from "react/jsx-runtime";
export function RssIcon({
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
		"aria-label": "Rss",
		"aria-labelledby": "Rss",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M3 17C5.20914 17 7 18.7909 7 21H3V17ZM3 10C9.07513 10 14 14.9249 14 21H12C12 16.0294 7.97056 12 3 12V10ZM3 3C12.9411 3 21 11.0589 21 21H19C19 12.1634 11.8366 5 3 5V3Z",
		}),
	});
}
RssIcon.displayName = "RssIcon";
export default RssIcon;
//# sourceMappingURL=rss-icon.js.map
