import type { SVGProps } from "react";

export function SortDescIcon({
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
			aria-label="Sort Desc"
			aria-labelledby="Sort Desc"
			aria-hidden={true}
			{...props}
		>
			<path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" />
		</svg>
	);
}

SortDescIcon.displayName = "SortDescIcon";

export default SortDescIcon;
