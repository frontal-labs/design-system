import type { SVGProps } from "react";

export function WubiInputIcon({
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
			aria-label="Wubi Input"
			aria-labelledby="Wubi Input"
			aria-hidden={true}
			{...props}
		>
			<path d="M3 21V19H6.662L7.896 12H5V10H8.249L9.13 5H4V3H20V5H11.161L10.279 10H18V19H21V21H3ZM16 12H9.927L8.692 19H16V12Z" />
		</svg>
	);
}

WubiInputIcon.displayName = "WubiInputIcon";

export default WubiInputIcon;
