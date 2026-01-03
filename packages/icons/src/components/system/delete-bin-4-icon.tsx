import type { SVGProps } from "react";

export function DeleteBin_4Icon({
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
			aria-label="Trash Delete Bin"
			aria-labelledby="Trash Delete Bin"
			aria-hidden={true}
			{...props}
		>
			<path d="M20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7H2V5H22V7H20ZM6 7V20H18V7H6ZM7 2H17V4H7V2ZM11 10H13V17H11V10Z" />
		</svg>
	);
}

DeleteBin_4Icon.displayName = "DeleteBin_4Icon";

export default DeleteBin_4Icon;
