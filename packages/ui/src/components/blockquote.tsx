import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { BlockquoteHTMLAttributes } from "react";

const blockquoteVariants = cva(
	"relative border-l-2 pl-6 italic has-[>svg]:gap-x-2 [&>svg]:h-lh [&>svg]:w-4",
	{
		defaultVariants: {
			variant: "default",
		},
		variants: {
			variant: {
				default:
					"bg-transparent dark:bg-input/32 [&>svg]:text-muted-foreground",
				error:
					"border-destructive/32 bg-destructive/4 [&>svg]:text-destructive",
				info: "border-info/32 bg-info/4 [&>svg]:text-info",
				success: "border-success/32 bg-success/4 [&>svg]:text-success",
				warning: "border-warning/32 bg-warning/4 [&>svg]:text-warning",
			},
		},
	},
);

type BlockquoteProps = useRender.ComponentProps<"blockquote"> &
	VariantProps<typeof blockquoteVariants>;

function Blockquote({ className, variant, render, ...props }: BlockquoteProps) {
	const typeValue: BlockquoteHTMLAttributes<HTMLQuoteElement>["cite"] = render
		? undefined
		: "blockquote";

	const defaultProps = {
		className: cn(blockquoteVariants({ className, variant })),
		"data-slot": "blockquote",
		cite: typeValue,
	};

	return useRender({
		defaultTagName: "blockquote",
		props: mergeProps<"blockquote">(defaultProps, props),
		render,
	});
}

export { Blockquote, type BlockquoteProps };
