import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const listVariants = cva("", {
	variants: {
		variant: {
			default: "list-disc",
			ordered: "list-decimal",
			none: "list-none",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type ListProps = ComponentProps<"ul"> &
	VariantProps<typeof listVariants> & {
		as?: "ul" | "ol";
	};

function List({ className, variant = "default", as, ...props }: ListProps) {
	const Component = as || (variant === "ordered" ? "ol" : "ul");
	return (
		<Component
			data-slot="list"
			data-variant={variant}
			className={cn(listVariants({ variant }), "space-y-2 pl-6", className)}
			{...props}
		/>
	);
}

function ListItem({ className, ...props }: ComponentProps<"li">) {
	return (
		<li
			data-slot="list-item"
			className={cn("text-copy-16", className)}
			{...props}
		/>
	);
}

function ListItemIcon({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="list-item-icon"
			className={cn("flex shrink-0 items-center justify-center", className)}
			{...props}
		/>
	);
}

function ListItemText({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="list-item-text"
			className={cn("flex-1", className)}
			{...props}
		/>
	);
}

function ListItemSecondaryAction({
	className,
	...props
}: ComponentProps<"div">) {
	return (
		<div
			data-slot="list-item-secondary-action"
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function ListItemAction({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="list-item-action"
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function ListItemActionIcon({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="list-item-action-icon"
			className={cn("flex shrink-0 items-center justify-center", className)}
			{...props}
		/>
	);
}

export {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	ListItemAction,
	ListItemActionIcon,
};
