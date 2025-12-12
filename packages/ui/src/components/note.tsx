"use client";

import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

const noteVariants = cva(
	"relative flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-sm",
	{
		defaultVariants: {
			variant: "default",
			size: "default",
			filled: false,
		},
		variants: {
			variant: {
				default:
					"border-border bg-transparent text-foreground dark:bg-input/32",
				action: "border-border bg-transparent text-foreground dark:bg-input/32",
				success:
					"border-success/32 bg-success/4 text-foreground dark:bg-success/8 dark:border-success/16",
				error:
					"border-destructive/32 bg-destructive/4 text-foreground dark:bg-destructive/8 dark:border-destructive/16",
				warning:
					"border-warning/32 bg-warning/4 text-foreground dark:bg-warning/8 dark:border-warning/16",
				secondary:
					"border-border/50 bg-muted/50 text-foreground dark:bg-muted/32",
				violet:
					"border-violet-500/32 bg-violet-500/4 text-foreground dark:bg-violet-500/8 dark:border-violet-500/16",
				cyan: "border-cyan-500/32 bg-cyan-500/4 text-foreground dark:bg-cyan-500/8 dark:border-cyan-500/16",
				disabled:
					"border-border/32 bg-muted/32 text-muted-foreground opacity-50",
			},
			size: {
				sm: "px-3 py-2 text-xs gap-2",
				default: "px-3.5 py-3 text-sm gap-3",
				lg: "px-4 py-3.5 text-base gap-3.5",
			},
			filled: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				variant: "default",
				filled: true,
				className: "bg-muted/50 dark:bg-input/48",
			},
			{
				variant: "action",
				filled: true,
				className: "bg-muted/50 dark:bg-input/48",
			},
			{
				variant: "success",
				filled: true,
				className: "bg-success/8 border-success/16 dark:bg-success/12",
			},
			{
				variant: "error",
				filled: true,
				className:
					"bg-destructive/8 border-destructive/16 dark:bg-destructive/12",
			},
			{
				variant: "warning",
				filled: true,
				className: "bg-warning/8 border-warning/16 dark:bg-warning/12",
			},
			{
				variant: "secondary",
				filled: true,
				className: "bg-muted border-border dark:bg-muted/64",
			},
			{
				variant: "violet",
				filled: true,
				className: "bg-violet-500/8 border-violet-500/16 dark:bg-violet-500/12",
			},
			{
				variant: "cyan",
				filled: true,
				className: "bg-cyan-500/8 border-cyan-500/16 dark:bg-cyan-500/12",
			},
		],
	},
);

const noteLabelVariants = cva("font-medium capitalize", {
	variants: {
		variant: {
			default: "text-foreground",
			action: "text-foreground",
			success: "text-success dark:text-success",
			error: "text-destructive dark:text-destructive",
			warning: "text-warning dark:text-warning",
			secondary: "text-muted-foreground",
			violet: "text-violet-600 dark:text-violet-400",
			cyan: "text-cyan-600 dark:text-cyan-400",
			disabled: "text-muted-foreground",
		},
	},
});

type NoteProps = ComponentProps<"div"> &
	VariantProps<typeof noteVariants> & {
		label?: string | ReactNode;
		showLabel?: boolean;
	};

function Note({
	className,
	variant = "default",
	size = "default",
	filled = false,
	label,
	showLabel,
	children,
	...props
}: NoteProps) {
	// Determine if label should be shown
	// If showLabel is explicitly false, don't show label
	// If showLabel is true or undefined, show label if:
	//   - label prop is provided (custom label), OR
	//   - variant is not default/action (auto-label from variant)
	const shouldShowLabel =
		showLabel !== false &&
		(label !== undefined || (variant !== "default" && variant !== "action"));

	// Get the label to display
	const displayLabel =
		label !== undefined
			? label
			: variant !== "default" && variant !== "action"
				? variant
				: undefined;

	return (
		<div
			className={cn(noteVariants({ variant, size, filled }), className)}
			data-slot="note"
			data-variant={variant}
			data-size={size}
			data-filled={filled}
			{...props}
		>
			{shouldShowLabel && displayLabel && (
				<div
					className={cn(
						noteLabelVariants({ variant }),
						"shrink-0",
						size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm",
					)}
					data-slot="note-label"
				>
					{typeof displayLabel === "string" ? (
						<>
							{displayLabel}
							{": "}
						</>
					) : (
						displayLabel
					)}
				</div>
			)}
			<div className="flex-1" data-slot="note-content">
				{children}
			</div>
		</div>
	);
}

export { Note, noteVariants, noteLabelVariants };
export type { NoteProps };
