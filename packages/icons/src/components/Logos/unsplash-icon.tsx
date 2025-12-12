import type { SVGProps } from "react";

export function UnsplashIcon({
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
			aria-label="Unsplash"
			aria-labelledby="Unsplash"
			aria-hidden={true}
			{...props}
		>
			<path d="M10.001 10V14H14.0002L14.0012 10H21.0012L21.0002 14L21.001 21H3.00098V10H10.001ZM8.00098 12H5.00098V19H19.001V16L19.0007 12H16.0007L15.9997 16H8.00098V12ZM16.001 3V9H8.00098V3H16.001ZM14.001 5H10.001V7H14.001V5Z" />
		</svg>
	);
}

UnsplashIcon.displayName = "UnsplashIcon";

export default UnsplashIcon;
