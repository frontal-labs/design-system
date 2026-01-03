import type { SVGProps } from "react";

export function Number_7Icon({
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
			aria-label="Number_7"
			aria-labelledby="Number_7"
			aria-hidden={true}
			{...props}
		>
			<path d="M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z" />
		</svg>
	);
}

Number_7Icon.displayName = "Number_7Icon";

export default Number_7Icon;
