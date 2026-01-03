import type { SVGProps } from "react";

export function ArrowDropDownIcon({
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
			aria-label="Arrow Down Drop Down"
			aria-labelledby="Arrow Down Drop Down"
			aria-hidden={true}
			{...props}
		>
			<path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
		</svg>
	);
}

ArrowDropDownIcon.displayName = "ArrowDropDownIcon";

export default ArrowDropDownIcon;
