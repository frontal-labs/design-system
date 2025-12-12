import type { SVGProps } from "react";

export function RhythmIcon({
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
			aria-label="Audio Equalizer Bars"
			aria-labelledby="Audio Equalizer Bars"
			aria-hidden={true}
			{...props}
		>
			<path d="M2 9H4V21H2V9ZM8 3H10V21H8V3ZM14 12H16V21H14V12ZM20 6H22V21H20V6Z" />
		</svg>
	);
}

RhythmIcon.displayName = "RhythmIcon";

export default RhythmIcon;
