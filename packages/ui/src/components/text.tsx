import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const textVariants = cva("text-foreground", {
	variants: {
		variant: {
			default: "text-copy-16",
			lead: "text-copy-20",
			body: "text-copy-18",
			small: "text-copy-14",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type TextProps = ComponentProps<"p"> &
	VariantProps<typeof textVariants> & {
		as?: "p" | "span" | "div";
	};

function Text({
	className,
	variant = "default",
	as = "p",
	...props
}: TextProps) {
	const Component = as;
	return (
		<Component
			data-slot="text"
			data-variant={variant}
			className={cn(textVariants({ variant, className }))}
			{...props}
		/>
	);
}

function Lead({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			data-slot="lead"
			className={cn("text-copy-24 text-muted-foreground", className)}
			{...props}
		/>
	);
}

function Body({ className, ...props }: ComponentProps<"p">) {
	return (
		<p data-slot="body" className={cn("text-copy-18", className)} {...props} />
	);
}

function Small({ className, ...props }: ComponentProps<"small">) {
	return (
		<small
			data-slot="small"
			className={cn("text-copy-14 text-muted-foreground", className)}
			{...props}
		/>
	);
}

export { Text, Lead, Body, Small };
