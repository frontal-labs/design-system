import type { SVGProps } from "react";

export function FolderReceivedIcon({
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
			aria-label="Folder Received"
			aria-labelledby="Folder Received"
			aria-hidden={true}
			{...props}
		>
			<path d="M22 13H20V7H11.5858L9.58579 5H4V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V13ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z" />
		</svg>
	);
}

FolderReceivedIcon.displayName = "FolderReceivedIcon";

export default FolderReceivedIcon;
