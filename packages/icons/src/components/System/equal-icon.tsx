import type { SVGProps } from "react";

export function EqualIcon({
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
			aria-label="Equal"
			aria-labelledby="Equal"
			aria-hidden={true}
			{...props}
		>
			<path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
		</svg>
	);
}

EqualIcon.displayName = "EqualIcon";

export default EqualIcon;
