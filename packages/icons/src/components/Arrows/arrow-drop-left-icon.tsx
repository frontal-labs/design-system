import type { SVGProps } from "react";

export function ArrowDropLeftIcon({
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
			aria-label="Arrow Left Direction"
			aria-labelledby="Arrow Left Direction"
			aria-hidden={true}
			{...props}
		>
			<path d="M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z" />
		</svg>
	);
}

ArrowDropLeftIcon.displayName = "ArrowDropLeftIcon";

export default ArrowDropLeftIcon;
