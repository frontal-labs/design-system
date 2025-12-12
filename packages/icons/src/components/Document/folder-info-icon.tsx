import type { SVGProps } from "react";

export function FolderInfoIcon({
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
			aria-label="Folder Info"
			aria-labelledby="Folder Info"
			aria-hidden={true}
			{...props}
		>
			<path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM11 12H13V17H11V12ZM11 9H13V11H11V9Z" />
		</svg>
	);
}

FolderInfoIcon.displayName = "FolderInfoIcon";

export default FolderInfoIcon;
