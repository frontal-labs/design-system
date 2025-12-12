import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

interface AspectRatioProps extends ComponentProps<"div"> {
	ratio?: number | string;
}

function AspectRatio({
	className,
	ratio = 16 / 9,
	children,
	style,
	...props
}: AspectRatioProps) {
	const aspectRatioValue = typeof ratio === "number" ? `${ratio}` : ratio;

	return (
		<div
			data-slot="aspect-ratio"
			data-ratio={ratio}
			className={cn("relative w-full", className)}
			style={{
				aspectRatio: aspectRatioValue,
				...style,
			}}
			{...props}
		>
			{children}
		</div>
	);
}

export { AspectRatio };
export type { AspectRatioProps };
