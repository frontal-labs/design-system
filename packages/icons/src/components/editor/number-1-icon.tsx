import type { SVGProps } from "react";

export function Number_1Icon({
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
			aria-label="Number One Numeric"
			aria-labelledby="Number One Numeric"
			aria-hidden={true}
			{...props}
		>
			<path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z" />
		</svg>
	);
}

Number_1Icon.displayName = "Number_1Icon";

export default Number_1Icon;
