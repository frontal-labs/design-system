import type { SVGProps } from "react";

export function GobletIcon({
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
			aria-label="Goblet Drinking Glass"
			aria-labelledby="Goblet Drinking Glass"
			aria-hidden={true}
			{...props}
		>
			<path d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7ZM9.29072 9L12 12.0103L14.7093 9H9.29072Z" />
		</svg>
	);
}

GobletIcon.displayName = "GobletIcon";

export default GobletIcon;
