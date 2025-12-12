import type { SVGProps } from "react";

export function ArrowRightIcon({
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
			aria-label="Arrow Right Direction"
			aria-labelledby="Arrow Right Direction"
			aria-hidden={true}
			{...props}
		>
			<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
		</svg>
	);
}

ArrowRightIcon.displayName = "ArrowRightIcon";

export default ArrowRightIcon;
