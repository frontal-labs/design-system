import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const boxVariants = cva("", {
	variants: {
		variant: {
			default: "",
			elevated: "rounded-lg border bg-card shadow-xs",
			outlined: "rounded-lg border border-border",
			filled: "rounded-lg bg-muted/50",
			ghost: "rounded-lg",
		},
		padding: {
			none: "",
			xs: "p-2",
			sm: "p-3",
			default: "p-4",
			md: "p-5",
			lg: "p-6",
			xl: "p-8",
		},
		rounded: {
			none: "rounded-none",
			sm: "rounded-sm",
			default: "rounded-md",
			md: "rounded-lg",
			lg: "rounded-xl",
			xl: "rounded-2xl",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		variant: "default",
		padding: "none",
		rounded: "default",
	},
});

interface BoxProps extends ComponentProps<"div"> {
	variant?: VariantProps<typeof boxVariants>["variant"];
	padding?: VariantProps<typeof boxVariants>["padding"];
	rounded?: VariantProps<typeof boxVariants>["rounded"];
}

function Box({ className, variant, padding, rounded, ...props }: BoxProps) {
	return (
		<div
			data-slot="box"
			data-variant={variant}
			data-padding={padding}
			data-rounded={rounded}
			className={cn(boxVariants({ variant, padding, rounded }), className)}
			{...props}
		/>
	);
}

export { Box, boxVariants };
export type { BoxProps };
