import type { SVGProps } from "react";

export function ContractLeftIcon({
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
			aria-label="Arrow Left Contract"
			aria-labelledby="Arrow Left Contract"
			aria-hidden={true}
			{...props}
		>
			<path d="M15.0712 4.92883L16.4854 6.34305L11.8286 10.9999L21.0004 11L21.0004 13L11.8286 12.9999L16.4854 17.6568L15.0712 19.071L8.00016 11.9999L15.0712 4.92883ZM4.00037 18.9998L4.00037 4.99985H6.00037L6.00037 18.9998H4.00037Z" />
		</svg>
	);
}

ContractLeftIcon.displayName = "ContractLeftIcon";

export default ContractLeftIcon;
