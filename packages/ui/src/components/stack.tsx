import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const stackVariants = cva("flex flex-col", {
	defaultVariants: {
		gap: "md",
		align: "start",
	},
	variants: {
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
	},
});

type StackProps = useRender.ComponentProps<"div"> &
	VariantProps<typeof stackVariants>;

function Stack({ className, gap, align, render, ...props }: StackProps) {
	const defaultProps = {
		className: cn(stackVariants({ gap, align }), className),
		"data-slot": "stack",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export { Stack, stackVariants, type StackProps };
