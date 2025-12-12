import type { SVGProps } from "react";

export function PauseLargeIcon({
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
			aria-label="Pause Large"
			aria-labelledby="Pause Large"
			aria-hidden={true}
			{...props}
		>
			<path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
		</svg>
	);
}

PauseLargeIcon.displayName = "PauseLargeIcon";

export default PauseLargeIcon;
