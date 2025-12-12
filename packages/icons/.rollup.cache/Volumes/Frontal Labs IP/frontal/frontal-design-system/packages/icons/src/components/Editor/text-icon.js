import { jsx as _jsx } from "react/jsx-runtime";
export function TextIcon({ width = 24, height = 24, color = 'currentColor', ...props }) {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: width, height: height, fill: color, "aria-label": "Text", "aria-labelledby": "Text", "aria-hidden": true, ...props, children: _jsx("path", { d: "M13 6V21H11V6H5V4H19V6H13Z" }) }));
}
TextIcon.displayName = 'TextIcon';
export default TextIcon;
//# sourceMappingURL=text-icon.js.map