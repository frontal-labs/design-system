import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const headingVariants = cva("font-bold text-foreground", {
	variants: {
		level: {
			h1: "text-heading-72",
			h2: "text-heading-64",
			h3: "text-heading-56",
			h4: "text-heading-48",
			h5: "text-heading-40",
			h6: "text-heading-32",
			"24": "text-heading-24",
			"20": "text-heading-20",
			"16": "text-heading-16",
			"14": "text-heading-14",
		},
	},
	defaultVariants: {
		level: "h1",
	},
});

type HeadingProps = ComponentProps<"h1"> &
	VariantProps<typeof headingVariants> & {
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	};

function Heading({ className, level = "h1", as, ...props }: HeadingProps) {
	const Component =
		as ||
		(level === "h1"
			? "h1"
			: level === "h2"
				? "h2"
				: level === "h3"
					? "h3"
					: level === "h4"
						? "h4"
						: level === "h5"
							? "h5"
							: level === "h6"
								? "h6"
								: "p");
	return (
		<Component
			data-slot="heading"
			data-level={level}
			className={cn(headingVariants({ level, className }))}
			{...props}
		/>
	);
}

export { Heading };
