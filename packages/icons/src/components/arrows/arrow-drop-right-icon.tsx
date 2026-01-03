import type { SVGProps } from "react";

export function ArrowDropRightIcon({
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
			aria-label="Arrow Right Navigation"
			aria-labelledby="Arrow Right Navigation"
			aria-hidden={true}
			{...props}
		>
			<path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z" />
		</svg>
	);
}

ArrowDropRightIcon.displayName = "ArrowDropRightIcon";

export default ArrowDropRightIcon;
