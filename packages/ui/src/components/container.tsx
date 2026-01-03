import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const containerVariants = cva("mx-auto w-full", {
	variants: {
		size: {
			sm: "max-w-screen-sm",
			md: "max-w-screen-md",
			lg: "max-w-screen-lg",
			xl: "max-w-screen-xl",
			"2xl": "max-w-screen-2xl",
			full: "max-w-full",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

type ContainerProps = useRender.ComponentProps<"div"> &
	VariantProps<typeof containerVariants>;

function Container({ className, size, render, ...props }: ContainerProps) {
	const defaultProps = {
		className: cn(containerVariants({ size }), className),
		"data-slot": "container",
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render,
	});
}

export { Container, containerVariants, type ContainerProps };
