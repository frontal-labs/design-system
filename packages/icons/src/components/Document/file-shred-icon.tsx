import type { SVGProps } from "react";

export function FileShredIcon({
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
			aria-label="File Shred"
			aria-labelledby="File Shred"
			aria-hidden={true}
			{...props}
		>
			<path d="M6 12H18V8H14V4H6V12ZM4 12V2.9954C4 2.44565 4.44484 2 4.99558 2H15L19.9997 7L20 12H22V14H2V12H4ZM3 16H5V22H3V16ZM19 16H21V22H19V16ZM15 16H17V22H15V16ZM11 16H13V22H11V16ZM7 16H9V22H7V16Z" />
		</svg>
	);
}

FileShredIcon.displayName = "FileShredIcon";

export default FileShredIcon;
