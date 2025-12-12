import type { SVGProps } from "react";

export function SubtractIcon({
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
			aria-label="Minus Subtract Remove"
			aria-labelledby="Minus Subtract Remove"
			aria-hidden={true}
			{...props}
		>
			<path d="M5 11V13H19V11H5Z" />
		</svg>
	);
}

SubtractIcon.displayName = "SubtractIcon";

export default SubtractIcon;
