import { jsx as _jsx } from "react/jsx-runtime";
export function QuestionAnswerIcon({
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
		"aria-label": "Question Answer Speech Bubble",
		"aria-labelledby": "Question Answer Speech Bubble",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z",
		}),
	});
}
QuestionAnswerIcon.displayName = "QuestionAnswerIcon";
export default QuestionAnswerIcon;
//# sourceMappingURL=question-answer-icon.js.map
