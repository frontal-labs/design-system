import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const containerVariants = cva("w-full mx-auto", {
	variants: {
		size: {
			xs: "max-w-screen-xs px-4",
			sm: "max-w-screen-sm px-4",
			default: "max-w-screen-md px-4",
			md: "max-w-screen-md px-6",
			lg: "max-w-screen-lg px-6",
			xl: "max-w-screen-xl px-8",
			"2xl": "max-w-screen-2xl px-8",
			full: "max-w-full",
		},
		padding: {
			none: "px-0",
			xs: "px-2",
			sm: "px-4",
			default: "px-4",
			md: "px-6",
			lg: "px-8",
			xl: "px-12",
		},
	},
	defaultVariants: {
		size: "default",
		padding: undefined,
	},
});

type ContainerProps = ComponentProps<"div"> &
	VariantProps<typeof containerVariants>;

function Container({ className, size, padding, ...props }: ContainerProps) {
	return (
		<div
			data-slot="container"
			data-size={size}
			data-padding={padding}
			className={cn(containerVariants({ size, padding }), className)}
			{...props}
		/>
	);
}

export { Container, containerVariants };
export type { ContainerProps };
