import type { SVGProps } from "react";

export function ArrowDropUpIcon({
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
			aria-label="Arrow Up Direction"
			aria-labelledby="Arrow Up Direction"
			aria-hidden={true}
			{...props}
		>
			<path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z" />
		</svg>
	);
}

ArrowDropUpIcon.displayName = "ArrowDropUpIcon";

export default ArrowDropUpIcon;
