import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const flexVariants = cva("flex", {
	defaultVariants: {
		direction: "row",
		align: "start",
		justify: "start",
		wrap: "nowrap",
		gap: "none",
	},
	variants: {
		direction: {
			row: "flex-row",
			column: "flex-col",
			"row-reverse": "flex-row-reverse",
			"column-reverse": "flex-col-reverse",
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
			none: "",
			xs: "gap-1",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-6",
			xl: "gap-8",
		},
	},
});

type FlexProps = useRender.ComponentProps<"div"> &
	VariantProps<typeof flexVariants>;

function Flex({
	className,
	direction,
	align,
	justify,
	wrap,
	gap,
	render,
	...props
}: FlexProps) {
	const defaultProps = {
		className: cn(
			flexVariants({ direction, align, justify, wrap, gap }),
			className,
		),
		"data-slot": "flex",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export { Flex, flexVariants, type FlexProps };
