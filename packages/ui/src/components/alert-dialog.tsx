"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "../utils";
import type { ComponentProps } from "react";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

type AlertDialogTriggerProps = AlertDialogPrimitive.Trigger.Props;

function AlertDialogTrigger(props: AlertDialogTriggerProps) {
	return (
		<AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
	);
}

type AlertDialogOverlayProps = AlertDialogPrimitive.Backdrop.Props;

function AlertDialogOverlay({ className, ...props }: AlertDialogOverlayProps) {
	return (
		<AlertDialogPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			data-slot="alert-dialog-backdrop"
			{...props}
		/>
	);
}

type AlertDialogViewportProps = AlertDialogPrimitive.Viewport.Props;

function AlertDialogViewport({
	className,
	...props
}: AlertDialogViewportProps) {
	return (
		<AlertDialogPrimitive.Viewport
			className={cn(
				"fixed inset-0 z-50 grid grid-rows-[1fr_auto] justify-items-center pt-6 sm:grid-rows-[1fr_auto_3fr] sm:p-4",
				className,
			)}
			data-slot="alert-dialog-viewport"
			{...props}
		/>
	);
}

type AlertDialogContentProps = AlertDialogPrimitive.Popup.Props;

function AlertDialogContent({ className, ...props }: AlertDialogContentProps) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogViewport>
				<AlertDialogPrimitive.Popup
					className={cn(
						"sm:-translate-y-[calc(1.25rem*var(--nested-dialogs))] relative row-start-2 grid max-h-full w-full min-w-0 border-t bg-popover bg-clip-padding text-popover-foreground opacity-[calc(1-0.1*var(--nested-dialogs))] shadow-lg transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-nested-dialog-open:origin-top data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4 max-sm:before:hidden sm:max-w-lg sm:data-nested:data-ending-style:translate-y-8 sm:data-nested:data-starting-style:translate-y-8 sm:scale-[calc(1-0.1*var(--nested-dialogs))] sm:rounded-2xl sm:border sm:data-ending-style:scale-98 sm:data-starting-style:scale-98 sm:before:rounded-[calc(var(--radius-2xl)-1px)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						className,
					)}
					data-slot="alert-dialog-popup"
					{...props}
				/>
			</AlertDialogViewport>
		</AlertDialogPortal>
	);
}

type AlertDialogHeaderProps = ComponentProps<"div">;

function AlertDialogHeader({ className, ...props }: AlertDialogHeaderProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-2 p-6 not-has-[+[data-slot=alert-dialog-footer]]:pb-4 text-center max-sm:pb-4 sm:text-left",
				className,
			)}
			data-slot="alert-dialog-header"
			{...props}
		/>
	);
}

type AlertDialogFooterProps = ComponentProps<"div"> & {
	variant?: "default" | "bare";
};

function AlertDialogFooter({
	className,
	variant = "default",
	...props
}: AlertDialogFooterProps) {
	return (
		<div
			className={cn(
				"flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
				variant === "default" && "border-t bg-muted/50 py-4",
				variant === "bare" && "pt-4 pb-6",
				className,
			)}
			data-slot="alert-dialog-footer"
			{...props}
		/>
	);
}

type AlertDialogTitleProps = AlertDialogPrimitive.Title.Props;

function AlertDialogTitle({ className, ...props }: AlertDialogTitleProps) {
	return (
		<AlertDialogPrimitive.Title
			className={cn("font-heading text-xl leading-none", className)}
			data-slot="alert-dialog-title"
			{...props}
		/>
	);
}

type AlertDialogDescriptionProps = AlertDialogPrimitive.Description.Props;

function AlertDialogDescription({
	className,
	...props
}: AlertDialogDescriptionProps) {
	return (
		<AlertDialogPrimitive.Description
			className={cn("text-muted-foreground text-sm", className)}
			data-slot="alert-dialog-description"
			{...props}
		/>
	);
}

type AlertDialogCloseProps = AlertDialogPrimitive.Close.Props;

function AlertDialogClose(props: AlertDialogCloseProps) {
	return (
		<AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
	);
}

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogClose,
	AlertDialogViewport,
	type AlertDialogTriggerProps,
	type AlertDialogOverlayProps,
	type AlertDialogViewportProps,
	type AlertDialogContentProps,
	type AlertDialogHeaderProps,
	type AlertDialogFooterProps,
	type AlertDialogTitleProps,
	type AlertDialogDescriptionProps,
	type AlertDialogCloseProps,
};
