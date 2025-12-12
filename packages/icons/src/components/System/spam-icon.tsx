import type { SVGProps } from "react";

export function SpamIcon({
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
			aria-label="Mail Envelope Spam"
			aria-labelledby="Mail Envelope Spam"
			aria-hidden={true}
			{...props}
		>
			<path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
		</svg>
	);
}

SpamIcon.displayName = "SpamIcon";

export default SpamIcon;
