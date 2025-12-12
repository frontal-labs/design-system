import type { SVGProps } from "react";

export function SliceIcon({
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
			aria-label="Slice Cut Knife"
			aria-labelledby="Slice Cut Knife"
			aria-hidden={true}
			{...props}
		>
			<path d="M15.6909 12.9147L17.4587 14.6824C11.4482 20.6929 6.4985 20.6929 2.25586 19.2786L17.8122 3.72229L21.3477 7.25782L15.6909 12.9147ZM12.8625 12.9147L18.5193 7.25782L17.8122 6.55072L6.3145 18.0484C9.04606 18.1558 11.6722 17.142 14.5808 14.633L12.8625 12.9147Z" />
		</svg>
	);
}

SliceIcon.displayName = "SliceIcon";

export default SliceIcon;
