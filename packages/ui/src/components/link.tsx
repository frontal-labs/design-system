import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const linkVariants = cva(
	"text-primary underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
	{
		defaultVariants: {
			variant: "default",
		},
		variants: {
			variant: {
				default: "underline",
				"no-underline": "",
				button:
					"inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent px-4 py-2 font-medium text-base transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background sm:text-sm",
			},
		},
	},
);

type LinkProps = useRender.ComponentProps<"a"> &
	VariantProps<typeof linkVariants>;

function Link({ className, variant, render, ...props }: LinkProps) {
	const defaultProps = {
		className: cn(linkVariants({ variant }), className),
		"data-slot": "link",
	};

	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(defaultProps, props),
		render,
	});
}

export { Link, type LinkProps };
