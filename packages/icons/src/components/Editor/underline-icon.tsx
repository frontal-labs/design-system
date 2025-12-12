import type { SVGProps } from "react";

export function UnderlineIcon({
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
			aria-label="Underline Text Editor"
			aria-labelledby="Underline Text Editor"
			aria-hidden={true}
			{...props}
		>
			<path d="M8 3V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V3H18V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V3H8ZM4 20H20V22H4V20Z" />
		</svg>
	);
}

UnderlineIcon.displayName = "UnderlineIcon";

export default UnderlineIcon;
