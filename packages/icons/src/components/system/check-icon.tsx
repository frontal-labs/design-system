import type { SVGProps } from "react";

export function CheckIcon({
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
			aria-label="Check Checkmark Tick"
			aria-labelledby="Check Checkmark Tick"
			aria-hidden={true}
			{...props}
		>
			<path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
		</svg>
	);
}

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;
