import type { SVGProps } from "react";

export function CornerUpRightIcon({
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
			aria-label="Arrow Up Right"
			aria-labelledby="Arrow Up Right"
			aria-hidden={true}
			{...props}
		>
			<path d="M4.99989 10.0001L4.99976 19L6.99976 19L6.99986 12.0001L17.1717 12L13.222 15.9498L14.6362 17.364L21.0001 11L14.6362 4.63605L13.222 6.05026L17.1717 10L4.99989 10.0001Z" />
		</svg>
	);
}

CornerUpRightIcon.displayName = "CornerUpRightIcon";

export default CornerUpRightIcon;
