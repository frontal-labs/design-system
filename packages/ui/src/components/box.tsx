import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";

const boxVariants = cva("", {
	defaultVariants: {
		padding: "none",
		background: "none",
		border: "none",
	},
	variants: {
		padding: {
			none: "",
			xs: "p-1",
			sm: "p-2",
			md: "p-4",
			lg: "p-6",
			xl: "p-8",
		},
		background: {
			none: "",
			default: "bg-background",
			muted: "bg-muted",
			card: "bg-card",
		},
		border: {
			none: "",
			default: "border border-border",
			rounded: "rounded-lg border border-border",
		},
	},
});

type BoxProps = useRender.ComponentProps<"div"> &
	VariantProps<typeof boxVariants>;

function Box({
	className,
	padding,
	background,
	border,
	render,
	...props
}: BoxProps) {
	const defaultProps = {
		className: cn(boxVariants({ padding, background, border }), className),
		"data-slot": "box",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export { Box, boxVariants, type BoxProps };
