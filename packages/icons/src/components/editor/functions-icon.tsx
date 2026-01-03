import type { SVGProps } from "react";

export function FunctionsIcon({
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
			aria-label="Functions Math F"
			aria-labelledby="Functions Math F"
			aria-hidden={true}
			{...props}
		>
			<path d="M5 18L12.6796 12L5 6V4H19V6H8.26348L16 12L8.26348 18H19V20H5V18Z" />
		</svg>
	);
}

FunctionsIcon.displayName = "FunctionsIcon";

export default FunctionsIcon;
