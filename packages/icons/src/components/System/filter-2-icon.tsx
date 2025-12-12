import type { SVGProps } from "react";

export function Filter_2Icon({
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
			aria-label="Filter_2"
			aria-labelledby="Filter_2"
			aria-hidden={true}
			{...props}
		>
			<path d="M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.4037 5L12 13.3944L17.5963 5H6.4037Z" />
		</svg>
	);
}

Filter_2Icon.displayName = "Filter_2Icon";

export default Filter_2Icon;
