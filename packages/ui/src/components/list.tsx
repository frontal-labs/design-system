import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const listVariants = cva("relative flex flex-col gap-2", {
	defaultVariants: {
		variant: "default",
		type: "unordered",
	},
	variants: {
		variant: {
			default: "list-disc",
			unstyled: "list-none",
			inline: "flex list-none flex-wrap gap-2",
		},
		type: {
			unordered: "",
			ordered: "list-decimal",
		},
	},
});

type ListProps = useRender.ComponentProps<"ul" | "ol"> &
	VariantProps<typeof listVariants>;

function List({ className, variant, type, render, ...props }: ListProps) {
	const defaultTagName = type === "ordered" ? "ol" : "ul";
	const defaultProps = {
		className: cn(
			listVariants({ variant, type }),
			variant !== "inline" && "space-y-2",
			className,
		),
		"data-slot": "list",
	};

	return useRender({
		defaultTagName,
		props: mergeProps<"ul" | "ol">(defaultProps, props),
		render,
	});
}

type ListItemProps = ComponentProps<"li">;

function ListItem({ className, ...props }: ListItemProps) {
	return <li className={cn("", className)} data-slot="list-item" {...props} />;
}

type ListItemTextProps = ComponentProps<"span">;

function ListItemText({ className, ...props }: ListItemTextProps) {
	return (
		<span className={cn("", className)} data-slot="list-item-text" {...props} />
	);
}

type ListItemIconProps = ComponentProps<"span">;

function ListItemIcon({ className, ...props }: ListItemIconProps) {
	return (
		<span
			className={cn("inline-flex items-center", className)}
			data-slot="list-item-icon"
			{...props}
		/>
	);
}

type ListItemActionProps = ComponentProps<"div">;

function ListItemAction({ className, ...props }: ListItemActionProps) {
	return (
		<div
			className={cn("ml-auto", className)}
			data-slot="list-item-action"
			{...props}
		/>
	);
}

type ListItemActionIconProps = ComponentProps<"span">;

function ListItemActionIcon({ className, ...props }: ListItemActionIconProps) {
	return (
		<span
			className={cn("inline-flex cursor-pointer items-center", className)}
			data-slot="list-item-action-icon"
			{...props}
		/>
	);
}

type ListItemSecondaryActionProps = ComponentProps<"div">;

function ListItemSecondaryAction({
	className,
	...props
}: ListItemSecondaryActionProps) {
	return (
		<div
			className={cn("text-muted-foreground text-sm", className)}
			data-slot="list-item-secondary-action"
			{...props}
		/>
	);
}

export {
	List,
	ListItem,
	ListItemAction,
	ListItemActionIcon,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	type ListItemActionIconProps,
	type ListItemActionProps,
	type ListItemIconProps,
	type ListItemProps,
	type ListItemSecondaryActionProps,
	type ListItemTextProps,
	type ListProps,
};
