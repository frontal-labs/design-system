import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const flexVariants = cva("flex", {
	variants: {
		direction: {
			row: "flex-row",
			"row-reverse": "flex-row-reverse",
			col: "flex-col",
			"col-reverse": "flex-col-reverse",
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
		wrap: {
			nowrap: "flex-nowrap",
			wrap: "flex-wrap",
			"wrap-reverse": "flex-wrap-reverse",
		},
		gap: {
			none: "gap-0",
			xs: "gap-2",
			sm: "gap-3",
			default: "gap-4",
			md: "gap-5",
			lg: "gap-6",
			xl: "gap-8",
		},
		gapX: {
			none: "gap-x-0",
			xs: "gap-x-2",
			sm: "gap-x-3",
			default: "gap-x-4",
			md: "gap-x-5",
			lg: "gap-x-6",
			xl: "gap-x-8",
		},
		gapY: {
			none: "gap-y-0",
			xs: "gap-y-2",
			sm: "gap-y-3",
			default: "gap-y-4",
			md: "gap-y-5",
			lg: "gap-y-6",
			xl: "gap-y-8",
		},
	},
	defaultVariants: {
		direction: "row",
		align: "stretch",
		justify: "start",
		wrap: "nowrap",
	},
});

interface FlexProps extends ComponentProps<"div"> {
	direction?: VariantProps<typeof flexVariants>["direction"];
	align?: VariantProps<typeof flexVariants>["align"];
	justify?: VariantProps<typeof flexVariants>["justify"];
	wrap?: VariantProps<typeof flexVariants>["wrap"];
	gap?: VariantProps<typeof flexVariants>["gap"];
	gapX?: VariantProps<typeof flexVariants>["gapX"];
	gapY?: VariantProps<typeof flexVariants>["gapY"];
}

function Flex({
	className,
	direction,
	align,
	justify,
	wrap,
	gap,
	gapX,
	gapY,
	...props
}: FlexProps) {
	return (
		<div
			data-slot="flex"
			data-direction={direction}
			data-align={align}
			data-justify={justify}
			className={cn(
				flexVariants({ direction, align, justify, wrap, gap, gapX, gapY }),
				className,
			)}
			{...props}
		/>
	);
}

export { Flex, flexVariants };
export type { FlexProps };
