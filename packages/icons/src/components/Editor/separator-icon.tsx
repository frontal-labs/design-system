import type { SVGProps } from "react";

export function SeparatorIcon({
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
			aria-label="Separator"
			aria-labelledby="Separator"
			aria-hidden={true}
			{...props}
		>
			<path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z" />
		</svg>
	);
}

SeparatorIcon.displayName = "SeparatorIcon";

export default SeparatorIcon;
