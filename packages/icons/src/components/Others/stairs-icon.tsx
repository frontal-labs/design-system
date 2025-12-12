import type { SVGProps } from "react";

export function StairsIcon({
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
			aria-label="Stairs Step Building"
			aria-labelledby="Stairs Step Building"
			aria-hidden={true}
			{...props}
		>
			<path d="M15 3H21V21H3V15H7V11H11V7H15V3ZM17 5V9H13V13H9V17H5V19H19V5H17Z" />
		</svg>
	);
}

StairsIcon.displayName = "StairsIcon";

export default StairsIcon;
