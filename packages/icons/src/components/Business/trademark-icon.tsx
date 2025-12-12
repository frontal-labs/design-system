import type { SVGProps } from "react";

export function TrademarkIcon({
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
			aria-label="Trademark Tm Business"
			aria-labelledby="Trademark Tm Business"
			aria-hidden={true}
			{...props}
		>
			<path d="M10 6V8H6V18H4V8H0V6H10ZM12 6H14.5L17.4999 11.196L20.5 6H23V18H21V9.133L17.4999 15.196L14 9.135V18H12V6Z" />
		</svg>
	);
}

TrademarkIcon.displayName = "TrademarkIcon";

export default TrademarkIcon;
