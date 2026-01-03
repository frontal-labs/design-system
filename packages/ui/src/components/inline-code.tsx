import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@frontal/shared";

type InlineCodeProps = useRender.ComponentProps<"code">;

function InlineCode({ className, render, ...props }: InlineCodeProps) {
	const defaultProps = {
		className: cn(
			"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
			className,
		),
		"data-slot": "inline-code",
	};

	return useRender({
		defaultTagName: "code",
		props: mergeProps<"code">(defaultProps, props),
		render,
	});
}

export { InlineCode, type InlineCodeProps };
