import type { SVGProps } from "react";

export function PushpinVariantIcon({
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
			aria-label="Pushpin Pin Marker"
			aria-labelledby="Pushpin Pin Marker"
			aria-hidden={true}
			{...props}
		>
			<path d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18ZM9 5V11.6056L7.4037 14H16.5963L15 11.6056V5H9Z" />
		</svg>
	);
}

PushpinVariantIcon.displayName = "PushpinVariantIcon";

export default PushpinVariantIcon;
