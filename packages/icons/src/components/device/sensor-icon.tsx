import type { SVGProps } from "react";

export function SensorIcon({
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
			aria-label="Sensor Device Electronics"
			aria-labelledby="Sensor Device Electronics"
			aria-hidden={true}
			{...props}
		>
			<path d="M6 8V19H18V8H15V2H17V6H22V8H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8H2V6H7V2H9V8H6ZM13 2V8H11V2H13Z" />
		</svg>
	);
}

SensorIcon.displayName = "SensorIcon";

export default SensorIcon;
