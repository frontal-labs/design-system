import type { SVGProps } from "react";

export function CheckboxIndeterminateIcon({
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
			aria-label="Checkbox Indeterminate"
			aria-labelledby="Checkbox Indeterminate"
			aria-hidden={true}
			{...props}
		>
			<path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM7 11H17V13H7V11Z" />
		</svg>
	);
}

CheckboxIndeterminateIcon.displayName = "CheckboxIndeterminateIcon";

export default CheckboxIndeterminateIcon;
