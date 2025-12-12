import type { SVGProps } from "react";

export function VoiceprintIcon({
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
			aria-label="Voiceprint"
			aria-labelledby="Voiceprint"
			aria-hidden={true}
			{...props}
		>
			<path d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z" />
		</svg>
	);
}

VoiceprintIcon.displayName = "VoiceprintIcon";

export default VoiceprintIcon;
