import { jsx as _jsx } from "react/jsx-runtime";
export function LoginBoxIcon({
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
		"aria-label": "Login Box Arrow",
		"aria-labelledby": "Login Box Arrow",
		"aria-hidden": true,
		...props,
		children: _jsx("path", {
			d: "M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z",
		}),
	});
}
LoginBoxIcon.displayName = "LoginBoxIcon";
export default LoginBoxIcon;
//# sourceMappingURL=login-box-icon.js.map
