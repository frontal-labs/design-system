import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("font-bold font-sans", {
	variants: {
		size: {
			"72": "text-heading-72",
			"64": "text-heading-64",
			"56": "text-heading-56",
			"48": "text-heading-48",
			"40": "text-heading-40",
			"32": "text-heading-32",
			"24": "text-heading-24",
			"20": "text-heading-20",
			"16": "text-heading-16",
			"14": "text-heading-14",
		},
	},
	defaultVariants: {
		size: "32",
	},
});

type HeadingProps = useRender.ComponentProps<"h2"> &
	VariantProps<typeof headingVariants>;

function Heading({ className, size, render, ...props }: HeadingProps) {
	const defaultProps = {
		className: cn(headingVariants({ size }), className),
		"data-slot": "heading",
	};

	return useRender({
		defaultTagName: "h2",
		props: mergeProps<"h2">(defaultProps, props),
		render,
	});
}

export { Heading, type HeadingProps };
