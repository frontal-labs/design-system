import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
	variants: {
		padding: {
			none: "",
			xs: "py-2",
			sm: "py-4",
			md: "py-6",
			lg: "py-8",
			xl: "py-12",
		},
	},
	defaultVariants: {
		padding: "md",
	},
});

type SectionProps = useRender.ComponentProps<"section"> &
	VariantProps<typeof sectionVariants>;

function Section({ className, padding, render, ...props }: SectionProps) {
	const defaultProps = {
		className: cn(sectionVariants({ padding }), className),
		"data-slot": "section",
	};

	return useRender({
		defaultTagName: "section",
		props: mergeProps<"section">(defaultProps, props),
		render,
	});
}

export { Section, sectionVariants, type SectionProps };
