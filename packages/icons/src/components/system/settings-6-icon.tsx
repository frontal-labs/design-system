import type { SVGProps } from "react";

export function Settings_6Icon({
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
			aria-label="Settings_6"
			aria-labelledby="Settings_6"
			aria-hidden={true}
			{...props}
		>
			<path d="M17.5 2.47363L23 11.9999L17.5 21.5262H6.5L1 11.9999L6.5 2.47363H17.5ZM16.3453 4.47363H7.6547L3.3094 11.9999L7.6547 19.5262H16.3453L20.6906 11.9999L16.3453 4.47363ZM8.63398 8.16979L10.366 7.16979L15.366 15.83L13.634 16.83L8.63398 8.16979Z" />
		</svg>
	);
}

Settings_6Icon.displayName = "Settings_6Icon";

export default Settings_6Icon;
