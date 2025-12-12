import type { SVGProps } from "react";

export function Menu_5Icon({
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
			aria-label="Menu_5"
			aria-labelledby="Menu_5"
			aria-hidden={true}
			{...props}
		>
			<path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z" />
		</svg>
	);
}

Menu_5Icon.displayName = "Menu_5Icon";

export default Menu_5Icon;
