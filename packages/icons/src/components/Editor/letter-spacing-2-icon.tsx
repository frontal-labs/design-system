import type { SVGProps } from "react";

export function LetterSpacing_2Icon({
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
			aria-label="Letter Spacing_2"
			aria-labelledby="Letter Spacing_2"
			aria-hidden={true}
			{...props}
		>
			<path d="M6.19983 14H8.3539L9.55389 11H14.4458L15.6458 14H17.7998L12.9998 2H10.9998L6.19983 14ZM11.9998 4.88517 13.6458 9H10.3539L11.9998 4.88517ZM3 16V22L5 22 4.99992 20H18.9999L19 22 21 22 20.9999 16H18.9999V18H4.99992L5 16 3 16Z" />
		</svg>
	);
}

LetterSpacing_2Icon.displayName = "LetterSpacing_2Icon";

export default LetterSpacing_2Icon;
