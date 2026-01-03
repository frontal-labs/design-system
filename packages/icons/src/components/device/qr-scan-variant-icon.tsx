import type { SVGProps } from "react";

export function QrScanVariantIcon({
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
			aria-label="Qr Scan Variant"
			aria-labelledby="Qr Scan Variant"
			aria-hidden={true}
			{...props}
		>
			<path d="M15 3H21V8H19V5H15V3ZM9 3V5H5V8H3V3H9ZM15 21V19H19V16H21V21H15ZM9 21H3V16H5V19H9V21ZM3 11H21V13H3V11Z" />
		</svg>
	);
}

QrScanVariantIcon.displayName = "QrScanVariantIcon";

export default QrScanVariantIcon;
