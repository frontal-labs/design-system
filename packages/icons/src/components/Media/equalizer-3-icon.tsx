import type { SVGProps } from "react";

export function Equalizer_3Icon({
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
			aria-label="Equalizer_3"
			aria-labelledby="Equalizer_3"
			aria-hidden={true}
			{...props}
		>
			<path d="M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z" />
		</svg>
	);
}

Equalizer_3Icon.displayName = "Equalizer_3Icon";

export default Equalizer_3Icon;
