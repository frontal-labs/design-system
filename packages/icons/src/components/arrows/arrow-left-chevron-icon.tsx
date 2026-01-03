import type { SVGProps } from "react";

export function ArrowLeftChevronIcon({
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
			<path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
		</svg>
	);
}

ArrowLeftChevronIcon.displayName = "ArrowLeftChevronIcon";

export default ArrowLeftChevronIcon;
