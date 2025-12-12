import { jsx as _jsx } from "react/jsx-runtime";
export function ParagraphIcon({
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
		"aria-label": "Paragraph Text Formatting",
		"aria-labelledby": "Paragraph Text Formatting",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M12 6V21H10V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H20V6H17V21H15V6H12ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V6Z",
		}),
	});
}
ParagraphIcon.displayName = "ParagraphIcon";
export default ParagraphIcon;
//# sourceMappingURL=paragraph-icon.js.map
