import type { SVGProps } from "react";

export function IndentDecreaseIcon({
	width = 24,
	height = 24,
	color = "currentColor",
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={width}
			height={height}
			fill={color}
			aria-label="Indent Decrease"
			aria-labelledby="Indent Decrease"
			aria-hidden={true}
			{...props}
		>
			<path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z" />
		</svg>
	);
}

IndentDecreaseIcon.displayName = "IndentDecreaseIcon";

export default IndentDecreaseIcon;
