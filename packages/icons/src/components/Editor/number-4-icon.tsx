import type { SVGProps } from "react";

export function Number_4Icon({
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
			aria-label="Number_4"
			aria-labelledby="Number_4"
			aria-hidden={true}
			{...props}
		>
			<path d="M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z" />
		</svg>
	);
}

Number_4Icon.displayName = "Number_4Icon";

export default Number_4Icon;
