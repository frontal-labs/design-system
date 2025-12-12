import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const gridVariants = cva("grid", {
	variants: {
		cols: {
			1: "grid-cols-1",
			2: "grid-cols-2",
			3: "grid-cols-3",
			4: "grid-cols-4",
			5: "grid-cols-5",
			6: "grid-cols-6",
			12: "grid-cols-12",
			auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
			"auto-fill": "grid-cols-[repeat(auto-fill,minmax(0,1fr))]",
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
		flow: {
			row: "grid-flow-row",
			col: "grid-flow-col",
			dense: "grid-flow-dense",
			"row-dense": "grid-flow-row-dense",
			"col-dense": "grid-flow-col-dense",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch",
			baseline: "items-baseline",
		},
		justify: {
			start: "justify-items-start",
			center: "justify-items-center",
			end: "justify-items-end",
			stretch: "justify-items-stretch",
		},
	},
	defaultVariants: {
		cols: 1,
		gap: "default",
		flow: "row",
		align: "stretch",
		justify: "stretch",
	},
});

interface GridProps extends ComponentProps<"div"> {
	cols?: VariantProps<typeof gridVariants>["cols"];
	gap?: VariantProps<typeof gridVariants>["gap"];
	gapX?: VariantProps<typeof gridVariants>["gapX"];
	gapY?: VariantProps<typeof gridVariants>["gapY"];
	flow?: VariantProps<typeof gridVariants>["flow"];
	align?: VariantProps<typeof gridVariants>["align"];
	justify?: VariantProps<typeof gridVariants>["justify"];
}

function Grid({
	className,
	cols,
	gap,
	gapX,
	gapY,
	flow,
	align,
	justify,
	...props
}: GridProps) {
	return (
		<div
			data-slot="grid"
			data-cols={cols}
			data-gap={gap}
			data-flow={flow}
			className={cn(
				gridVariants({ cols, gap, gapX, gapY, flow, align, justify }),
				className,
			)}
			{...props}
		/>
	);
}

const gridItemVariants = cva("", {
	variants: {
		colSpan: {
			1: "col-span-1",
			2: "col-span-2",
			3: "col-span-3",
			4: "col-span-4",
			5: "col-span-5",
			6: "col-span-6",
			7: "col-span-7",
			8: "col-span-8",
			9: "col-span-9",
			10: "col-span-10",
			11: "col-span-11",
			12: "col-span-12",
			full: "col-span-full",
		},
		rowSpan: {
			1: "row-span-1",
			2: "row-span-2",
			3: "row-span-3",
			4: "row-span-4",
			5: "row-span-5",
			6: "row-span-6",
			full: "row-span-full",
		},
		colStart: {
			1: "col-start-1",
			2: "col-start-2",
			3: "col-start-3",
			4: "col-start-4",
			5: "col-start-5",
			6: "col-start-6",
			7: "col-start-7",
			8: "col-start-8",
			9: "col-start-9",
			10: "col-start-10",
			11: "col-start-11",
			12: "col-start-12",
			auto: "col-start-auto",
		},
		colEnd: {
			1: "col-end-1",
			2: "col-end-2",
			3: "col-end-3",
			4: "col-end-4",
			5: "col-end-5",
			6: "col-end-6",
			7: "col-end-7",
			8: "col-end-8",
			9: "col-end-9",
			10: "col-end-10",
			11: "col-end-11",
			12: "col-end-12",
			auto: "col-end-auto",
		},
		rowStart: {
			1: "row-start-1",
			2: "row-start-2",
			3: "row-start-3",
			4: "row-start-4",
			5: "row-start-5",
			6: "row-start-6",
			auto: "row-start-auto",
		},
		rowEnd: {
			1: "row-end-1",
			2: "row-end-2",
			3: "row-end-3",
			4: "row-end-4",
			5: "row-end-5",
			6: "row-end-6",
			auto: "row-end-auto",
		},
	},
});

function GridItem({
	className,
	colSpan,
	rowSpan,
	colStart,
	colEnd,
	rowStart,
	rowEnd,
	...props
}: ComponentProps<"div"> & VariantProps<typeof gridItemVariants>) {
	return (
		<div
			data-slot="grid-item"
			data-col-span={colSpan}
			data-row-span={rowSpan}
			className={cn(
				gridItemVariants({
					colSpan,
					rowSpan,
					colStart,
					colEnd,
					rowStart,
					rowEnd,
				}),
				className,
			)}
			{...props}
		/>
	);
}

export { Grid, GridItem, gridVariants };
export type { GridProps };
