import type { SVGProps } from "react";

export function FlipHorizontal_2Icon({
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
			aria-label="Flip Horizontal Arrow"
			aria-labelledby="Flip Horizontal Arrow"
			aria-hidden={true}
			{...props}
		>
			<path d="M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM10 8V11H14V8L18 12L14 16V13H10V16L6 12L10 8Z" />
		</svg>
	);
}

FlipHorizontal_2Icon.displayName = "FlipHorizontal_2Icon";

export default FlipHorizontal_2Icon;
