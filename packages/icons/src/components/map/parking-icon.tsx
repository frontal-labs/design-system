import type { SVGProps } from "react";

export function ParkingIcon({
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
			aria-label="Parking Vehicle Map"
			aria-labelledby="Parking Vehicle Map"
			aria-hidden={true}
			{...props}
		>
			<path d="M6 3H13C16.3137 3 19 5.68629 19 9C19 12.3137 16.3137 15 13 15H8V21H6V3ZM8 5V13H13C15.2091 13 17 11.2091 17 9C17 6.79086 15.2091 5 13 5H8Z" />
		</svg>
	);
}

ParkingIcon.displayName = "ParkingIcon";

export default ParkingIcon;
