import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const sectionVariants = cva("", {
	variants: {
		padding: {
			none: "",
			xs: "py-2",
			sm: "py-4",
			default: "py-6",
			md: "py-8",
			lg: "py-12",
			xl: "py-16",
			"2xl": "py-20",
		},
		paddingX: {
			none: "",
			xs: "px-2",
			sm: "px-4",
			default: "px-4",
			md: "px-6",
			lg: "px-8",
			xl: "px-12",
		},
	},
	defaultVariants: {
		padding: "default",
		paddingX: "default",
	},
});

interface SectionProps extends ComponentProps<"section"> {
	padding?: VariantProps<typeof sectionVariants>["padding"];
	paddingX?: VariantProps<typeof sectionVariants>["paddingX"];
}

function Section({ className, padding, paddingX, ...props }: SectionProps) {
	return (
		<section
			data-slot="section"
			data-padding={padding}
			data-padding-x={paddingX}
			className={cn(sectionVariants({ padding, paddingX }), className)}
			{...props}
		/>
	);
}

export { Section, sectionVariants };
export type { SectionProps };
