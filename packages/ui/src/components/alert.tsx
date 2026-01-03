import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const alertVariants = cva(
	"relative grid w-full items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-card-foreground text-sm has-[>svg]:has-data-[slot=alert-action]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-data-[slot=alert-action]:grid-cols-[1fr_auto] has-[>svg]:gap-x-2 [&>svg]:h-lh [&>svg]:w-4",
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

type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertVariants>;

function Alert({ className, variant, ...props }: AlertProps) {
	return (
		<div
			className={cn(alertVariants({ variant }), className)}
			data-slot="alert"
			role="alert"
			{...props}
		/>
	);
}

type AlertTitleProps = ComponentProps<"div">;

function AlertTitle({ className, ...props }: AlertTitleProps) {
	return (
		<div
			className={cn("font-medium [svg~&]:col-start-2", className)}
			data-slot="alert-title"
			{...props}
		/>
	);
}

type AlertDescriptionProps = ComponentProps<"div">;

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-2.5 text-muted-foreground [svg~&]:col-start-2",
				className,
			)}
			data-slot="alert-description"
			{...props}
		/>
	);
}

type AlertActionProps = ComponentProps<"div">;

function AlertAction({ className, ...props }: AlertActionProps) {
	return (
		<div
			className={cn(
				"flex gap-1 max-sm:col-start-2 max-sm:mt-2 sm:row-start-1 sm:row-end-3 sm:self-center sm:[[data-slot=alert-description]~&]:col-start-2 sm:[[data-slot=alert-title]~&]:col-start-2 sm:[svg~&]:col-start-2 sm:[svg~[data-slot=alert-description]~&]:col-start-3 sm:[svg~[data-slot=alert-title]~&]:col-start-3",
				className,
			)}
			data-slot="alert-action"
			{...props}
		/>
	);
}

export {
	Alert,
	AlertTitle,
	AlertDescription,
	AlertAction,
	type AlertProps,
	type AlertTitleProps,
	type AlertDescriptionProps,
	type AlertActionProps,
};
