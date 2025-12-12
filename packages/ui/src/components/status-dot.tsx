"use client";

import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

const statusDotVariants = cva("inline-flex shrink-0 items-center gap-2", {
	variants: {
		status: {
			queued: "",
			building: "",
			error: "",
			ready: "",
			canceled: "",
		},
	},
	defaultVariants: {
		status: "queued",
	},
});

const statusDotDotVariants = cva("shrink-0 rounded-full", {
	variants: {
		status: {
			queued: "bg-gray-500 dark:bg-gray-400",
			building: "bg-orange-500",
			error: "bg-red-500",
			ready: "bg-cyan-500",
			canceled: "bg-gray-500 dark:bg-gray-400",
		},
		size: {
			default: "size-2",
			sm: "size-1.5",
			lg: "size-2.5",
		},
	},
	defaultVariants: {
		status: "queued",
		size: "default",
	},
});

interface StatusDotProps extends ComponentProps<"div"> {
	status?: VariantProps<typeof statusDotVariants>["status"];
	size?: VariantProps<typeof statusDotDotVariants>["size"];
	label?: ReactNode;
	"aria-label"?: string;
}

function StatusDot({
	className,
	status = "queued",
	size = "default",
	label,
	"aria-label": ariaLabel,
	...props
}: StatusDotProps) {
	const statusLabels: Record<NonNullable<StatusDotProps["status"]>, string> = {
		queued: "Queued",
		building: "Building",
		error: "Error",
		ready: "Ready",
		canceled: "Canceled",
	};

	const computedAriaLabel =
		ariaLabel ?? (label ? undefined : statusLabels[status]);

	return (
		<div
			data-slot="status-dot"
			className={cn(statusDotVariants({ status, className }))}
			aria-label={computedAriaLabel}
			{...props}
		>
			<span
				data-slot="status-dot-indicator"
				className={cn(statusDotDotVariants({ status, size }))}
				aria-hidden="true"
			/>
			{label && (
				<span data-slot="status-dot-label" className="text-sm text-foreground">
					{label}
				</span>
			)}
		</div>
	);
}

export { StatusDot, statusDotVariants, statusDotDotVariants };
export type { StatusDotProps };
