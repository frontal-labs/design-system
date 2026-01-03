import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-sans", {
	variants: {
		size: {
			"24": "text-copy-24",
			"20": "text-copy-20",
			"18": "text-copy-18",
			"16": "text-copy-16",
			"14": "text-copy-14",
			"13": "text-copy-13",
		},
		weight: {
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
		},
	},
	defaultVariants: {
		size: "16",
		weight: "normal",
	},
});

type TextProps = useRender.ComponentProps<"p"> &
	VariantProps<typeof textVariants>;

function Text({ className, size, weight, render, ...props }: TextProps) {
	const defaultProps = {
		className: cn(textVariants({ size, weight }), className),
		"data-slot": "text",
	};

	return useRender({
		defaultTagName: "p",
		props: mergeProps<"p">(defaultProps, props),
		render,
	});
}

export { Text, type TextProps };
