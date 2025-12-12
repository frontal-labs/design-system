import type { SVGProps } from "react";

export function StickyNote_2Icon({
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
			aria-label="Sticky Note_2"
			aria-labelledby="Sticky Note_2"
			aria-hidden={true}
			{...props}
		>
			<path d="M3.99826 21C3.44694 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44749 21 3.9985V16L15.9968 21H3.99826ZM5 19H15.1688L19 15.1712V5H5V19Z" />
		</svg>
	);
}

StickyNote_2Icon.displayName = "StickyNote_2Icon";

export default StickyNote_2Icon;
