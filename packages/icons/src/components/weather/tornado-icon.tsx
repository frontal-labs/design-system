import type { SVGProps } from "react";

export function TornadoIcon({
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
			aria-label="Tornado Weather Storm"
			aria-labelledby="Tornado Weather Storm"
			aria-hidden={true}
			{...props}
		>
			<path d="M2 3H22V5H2V3ZM4 7H20V9H4V7ZM8 11H22V13H8V11ZM10 15H18V17H10V15ZM8 19H14V21H8V19Z" />
		</svg>
	);
}

TornadoIcon.displayName = "TornadoIcon";

export default TornadoIcon;
