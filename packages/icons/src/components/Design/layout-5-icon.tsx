import type { SVGProps } from "react";

export function Layout_5Icon({
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
			aria-label="Layout Grid Columns"
			aria-labelledby="Layout Grid Columns"
			aria-hidden={true}
			{...props}
		>
			<path d="M3 21C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3ZM7 10H4V19H7V10ZM20 10H9V19H20V10ZM20 5H4V8H20V5Z" />
		</svg>
	);
}

Layout_5Icon.displayName = "Layout_5Icon";

export default Layout_5Icon;
