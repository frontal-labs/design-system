import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const spacerVariants = cva("", {
	variants: {
		size: {
			none: "h-0 w-0",
			xs: "h-2 w-2",
			sm: "h-3 w-3",
			default: "h-4 w-4",
			md: "h-5 w-5",
			lg: "h-6 w-6",
			xl: "h-8 w-8",
			"2xl": "h-12 w-12",
			"3xl": "h-16 w-16",
		},
		axis: {
			horizontal: "w-full h-0",
			vertical: "h-full w-0",
			both: "h-full w-full",
		},
	},
	defaultVariants: {
		size: "default",
		axis: "vertical",
	},
});

interface SpacerProps extends ComponentProps<"div"> {
	size?: VariantProps<typeof spacerVariants>["size"];
	axis?: VariantProps<typeof spacerVariants>["axis"];
}

function Spacer({ className, size, axis, ...props }: SpacerProps) {
	return (
		<div
			data-slot="spacer"
			data-size={size}
			data-axis={axis}
			className={cn(spacerVariants({ size, axis }), className)}
			{...props}
		/>
	);
}

export { Spacer, spacerVariants };
export type { SpacerProps };
