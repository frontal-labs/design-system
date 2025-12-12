import type { SVGProps } from "react";

export function OverlineIcon({
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
			aria-label="Overline"
			aria-labelledby="Overline"
			aria-hidden={true}
			{...props}
		>
			<path d="M15.2459 18H8.75407L7.15407 22H5L11 7H13L19 22H16.8459L15.2459 18ZM14.4459 16L12 9.88516L9.55407 16H14.4459ZM4 3H20V5H4V3Z" />
		</svg>
	);
}

OverlineIcon.displayName = "OverlineIcon";

export default OverlineIcon;
