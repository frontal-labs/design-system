import type { SVGProps } from "react";

export function CornerDownLeftIcon({
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
			aria-label="Arrow Down Left"
			aria-labelledby="Arrow Down Left"
			aria-hidden={true}
			{...props}
		>
			<path d="M19.0001 13.9999L19.0002 5L17.0002 4.99997L17.0001 11.9999L6.8283 12L10.778 8.05024L9.36382 6.63603L2.99986 13L9.36382 19.364L10.778 17.9497L6.82826 14L19.0001 13.9999Z" />
		</svg>
	);
}

CornerDownLeftIcon.displayName = "CornerDownLeftIcon";

export default CornerDownLeftIcon;
