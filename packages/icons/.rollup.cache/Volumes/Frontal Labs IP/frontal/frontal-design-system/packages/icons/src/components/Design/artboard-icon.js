import { jsx as _jsx } from "react/jsx-runtime";
export function ArtboardIcon({ width = 24, height = 24, color = 'currentColor', ...props }) {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: width, height: height, fill: color, "aria-label": "Artboard", "aria-labelledby": "Artboard", "aria-hidden": true, ...props, children: _jsx("path", { d: "M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3ZM6 5V12H18V5H6Z" }) }));
}
ArtboardIcon.displayName = 'ArtboardIcon';
export default ArtboardIcon;
//# sourceMappingURL=artboard-icon.js.map