import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const stackVariants = cva("flex", {
	variants: {
		direction: {
			vertical: "flex-col",
			horizontal: "flex-row",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch",
			baseline: "items-baseline",
		},
		justify: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
		},
		spacing: {
			none: "gap-0",
			xs: "gap-2",
			sm: "gap-3",
			default: "gap-4",
			md: "gap-5",
			lg: "gap-6",
			xl: "gap-8",
		},
	},
	defaultVariants: {
		direction: "vertical",
		align: "stretch",
		justify: "start",
		spacing: "default",
	},
});

interface StackProps extends ComponentProps<"div"> {
	direction?: VariantProps<typeof stackVariants>["direction"];
	align?: VariantProps<typeof stackVariants>["align"];
	justify?: VariantProps<typeof stackVariants>["justify"];
	spacing?: VariantProps<typeof stackVariants>["spacing"];
}

function Stack({
	className,
	direction,
	align,
	justify,
	spacing,
	...props
}: StackProps) {
	return (
		<div
			data-slot="stack"
			data-direction={direction}
			data-align={align}
			data-justify={justify}
			data-spacing={spacing}
			className={cn(
				stackVariants({ direction, align, justify, spacing }),
				className,
			)}
			{...props}
		/>
	);
}

export { Stack, stackVariants };
export type { StackProps };
