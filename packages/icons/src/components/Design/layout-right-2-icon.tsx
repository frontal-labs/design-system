import type { SVGProps } from "react";

export function LayoutRight_2Icon({
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
			aria-label="Layout Columns Grid"
			aria-labelledby="Layout Columns Grid"
			aria-hidden={true}
			{...props}
		>
			<path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V19H20V5ZM18 7V17H16V7H18Z" />
		</svg>
	);
}

LayoutRight_2Icon.displayName = "LayoutRight_2Icon";

export default LayoutRight_2Icon;
