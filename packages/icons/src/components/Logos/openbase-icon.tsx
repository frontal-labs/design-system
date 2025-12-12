import type { SVGProps } from "react";

export function OpenbaseIcon({
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
			aria-label="Openbase Logo Star"
			aria-labelledby="Openbase Logo Star"
			aria-hidden={true}
			{...props}
		>
			<path d="M12 3L2 5.996L3 15.46L12 22.5L21 15.46L22 5.996L12 3ZM19.8367 7.43572L12 19.9608L4.16326 7.43572L12 5.08783L19.8367 7.43572Z" />
		</svg>
	);
}

OpenbaseIcon.displayName = "OpenbaseIcon";

export default OpenbaseIcon;
