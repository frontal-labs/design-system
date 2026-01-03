"use client";

import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

type AspectRatioProps = ComponentProps<"div"> & {
	ratio?: number;
};

function AspectRatio({
	className,
	ratio = 16 / 9,
	children,
	...props
}: AspectRatioProps) {
	return (
		<div
			className={cn("relative w-full", className)}
			data-slot="aspect-ratio"
			style={{ aspectRatio: ratio.toString() }}
			{...props}
		>
			<div className="absolute inset-0">{children}</div>
		</div>
	);
}

export { AspectRatio, type AspectRatioProps };
