import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";

const gridVariants = cva("grid", {
	variants: {
		columns: {
			"1": "grid-cols-1",
			"2": "grid-cols-2",
			"3": "grid-cols-3",
			"4": "grid-cols-4",
			"5": "grid-cols-5",
			"6": "grid-cols-6",
			"7": "grid-cols-7",
			"8": "grid-cols-8",
			"9": "grid-cols-9",
			"10": "grid-cols-10",
			"11": "grid-cols-11",
			"12": "grid-cols-12",
			auto: "",
		},
		gap: {
			none: "",
			xs: "gap-1",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-6",
			xl: "gap-8",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch",
		},
		justify: {
			start: "justify-start",
			center: "justify-center",
			end: "justify-end",
			between: "justify-between",
			around: "justify-around",
			evenly: "justify-evenly",
		},
	},
	defaultVariants: {
		columns: "auto",
		gap: "none",
		align: "start",
		justify: "start",
	},
});

type GridProps = useRender.ComponentProps<"div"> &
	VariantProps<typeof gridVariants>;

function Grid({
	className,
	columns,
	gap,
	align,
	justify,
	render,
	...props
}: GridProps) {
	const defaultProps = {
		className: cn(gridVariants({ columns, gap, align, justify }), className),
		"data-slot": "grid",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

type GridItemProps = useRender.ComponentProps<"div">;

function GridItem({ className, render, ...props }: GridItemProps) {
	const defaultProps = {
		className: cn("", className),
		"data-slot": "grid-item",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export { Grid, GridItem, gridVariants, type GridProps, type GridItemProps };
