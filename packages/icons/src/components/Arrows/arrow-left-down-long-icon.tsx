import type { SVGProps } from "react";

export function ArrowLeftDownLongIcon({
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
			aria-label="Arrow Left Down"
			aria-labelledby="Arrow Left Down"
			aria-hidden={true}
			{...props}
		>
			<path d="M19.7784 5.63589L18.3644 4.22168L6.92908 15.6569L6.92908 10.0712H4.92908L4.92908 19.0712L13.9291 19.0712V17.0712L8.34326 17.0712L19.7784 5.63589Z" />
		</svg>
	);
}

ArrowLeftDownLongIcon.displayName = "ArrowLeftDownLongIcon";

export default ArrowLeftDownLongIcon;
