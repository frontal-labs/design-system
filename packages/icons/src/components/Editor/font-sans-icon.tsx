import type { SVGProps } from "react";

export function FontSansIcon({
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
			aria-label="Font Sans"
			aria-labelledby="Font Sans"
			aria-hidden={true}
			{...props}
		>
			<path d="M7 4H19V6H10V12H18V14H10V21H7V4Z" />
		</svg>
	);
}

FontSansIcon.displayName = "FontSansIcon";

export default FontSansIcon;
