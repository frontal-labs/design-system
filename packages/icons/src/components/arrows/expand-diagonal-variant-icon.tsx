import type { SVGProps } from "react";

export function ExpandDiagonalVariantIcon({
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
			aria-label="Arrow Expand Diagonal"
			aria-labelledby="Arrow Expand Diagonal"
			aria-hidden={true}
			{...props}
		>
			<path d="M6.41421 5H10V3H3V10H5V6.41421L9.29289 10.7071L10.7071 9.29289L6.41421 5ZM21 14H19V17.5858L14.7071 13.2929L13.2929 14.7071L17.5858 19H14V21H21V14Z" />
		</svg>
	);
}

ExpandDiagonalVariantIcon.displayName = "ExpandDiagonalVariantIcon";

export default ExpandDiagonalVariantIcon;
