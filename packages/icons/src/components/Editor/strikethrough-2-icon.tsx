import type { SVGProps } from "react";

export function Strikethrough_2Icon({
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
			aria-label="Strikethrough_2"
			aria-labelledby="Strikethrough_2"
			aria-hidden={true}
			{...props}
		>
			<path d="M13 9H11V6H5V4H19V6H13V9ZM13 15V20H11V15H13ZM3 11H21V13H3V11Z" />
		</svg>
	);
}

Strikethrough_2Icon.displayName = "Strikethrough_2Icon";

export default Strikethrough_2Icon;
