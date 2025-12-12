import { jsx as _jsx } from "react/jsx-runtime";
export function QuoteTextIcon({
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
		"aria-label": "Quote Quotation Text",
		"aria-labelledby": "Quote Quotation Text",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z",
		}),
	});
}
QuoteTextIcon.displayName = "QuoteTextIcon";
export default QuoteTextIcon;
//# sourceMappingURL=quote-text-icon.js.map
