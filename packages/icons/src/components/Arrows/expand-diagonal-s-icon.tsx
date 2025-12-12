import type { SVGProps } from "react";

export function ExpandDiagonalSIcon({
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
			aria-label="Arrow Expand Diagonal"
			aria-labelledby="Arrow Expand Diagonal"
			aria-hidden={true}
			{...props}
		>
			<path d="M15.5858 7H12V5H19V12H17V8.41421L8.41421 17H12V19H5V12H7V15.5858L15.5858 7Z" />
		</svg>
	);
}

ExpandDiagonalSIcon.displayName = "ExpandDiagonalSIcon";

export default ExpandDiagonalSIcon;
