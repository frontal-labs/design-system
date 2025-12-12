import { jsx as _jsx } from "react/jsx-runtime";
export function TextSnippetIcon({
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
		"aria-label": "Text Snippet Document",
		"aria-labelledby": "Text Snippet Document",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z",
		}),
	});
}
TextSnippetIcon.displayName = "TextSnippetIcon";
export default TextSnippetIcon;
//# sourceMappingURL=text-snippet-icon.js.map
