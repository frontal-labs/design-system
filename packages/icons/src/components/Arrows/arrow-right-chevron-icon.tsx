import type { SVGProps } from "react";

export function ArrowRightChevronIcon({
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
			<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
		</svg>
	);
}

ArrowRightChevronIcon.displayName = "ArrowRightChevronIcon";

export default ArrowRightChevronIcon;
