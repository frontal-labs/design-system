"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { CloseIcon } from "@frontal/icons";
import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

const Sheet = SheetPrimitive.Root;

const SheetPortal = SheetPrimitive.Portal;

type SheetTriggerProps = SheetPrimitive.Trigger.Props & {
	asChild?: boolean;
};

function SheetTrigger({ asChild, children, ...props }: SheetTriggerProps) {
	if (asChild) {
		return (
			<SheetPrimitive.Trigger
				data-slot="sheet-trigger"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<SheetPrimitive.Trigger data-slot="sheet-trigger" {...props}>
			{children}
		</SheetPrimitive.Trigger>
	);
}

type SheetCloseProps = SheetPrimitive.Close.Props & {
	asChild?: boolean;
};

function SheetClose({ asChild, children, ...props }: SheetCloseProps) {
	if (asChild) {
		return (
			<SheetPrimitive.Close
				data-slot="sheet-close"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<SheetPrimitive.Close data-slot="sheet-close" {...props}>
			{children}
		</SheetPrimitive.Close>
	);
}

type SheetBackdropProps = SheetPrimitive.Backdrop.Props;

function SheetBackdrop({ className, ...props }: SheetBackdropProps) {
	return (
		<SheetPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			data-slot="sheet-backdrop"
			{...props}
		/>
	);
}

type SheetViewportProps = SheetPrimitive.Viewport.Props & {
	side?: "right" | "left" | "top" | "bottom";
	inset?: boolean;
};

function SheetViewport({
	className,
	side,
	inset = false,
	...props
}: SheetViewportProps) {
	return (
		<SheetPrimitive.Viewport
			className={cn(
				"fixed inset-0 z-50 grid",
				side === "bottom" && "grid grid-rows-[1fr_auto] pt-12",
				side === "top" && "grid grid-rows-[auto_1fr] pb-12",
				side === "left" && "flex justify-start",
				side === "right" && "flex justify-end",
				inset && "sm:p-4",
			)}
			data-slot="sheet-viewport"
			{...props}
		/>
	);
}

type SheetPopupProps = SheetPrimitive.Popup.Props & {
	showCloseButton?: boolean;
	side?: "right" | "left" | "top" | "bottom";
	inset?: boolean;
};

function SheetPopup({
	className,
	children,
	showCloseButton = true,
	side = "right",
	inset = false,
	...props
}: SheetPopupProps) {
	return (
		<SheetPortal>
			<SheetBackdrop />
			<SheetViewport inset={inset} side={side}>
				<SheetPrimitive.Popup
					className={cn(
						"relative flex max-h-full min-h-0 w-full min-w-0 flex-col bg-popover bg-clip-padding text-popover-foreground shadow-lg transition-[opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:before:hidden dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						side === "bottom" &&
							"row-start-2 border-t data-ending-style:translate-y-8 data-starting-style:translate-y-8",
						side === "top" &&
							"data-ending-style:-translate-y-8 data-starting-style:-translate-y-8 border-b",
						side === "left" &&
							"data-ending-style:-translate-x-8 data-starting-style:-translate-x-8 w-[calc(100%-var(--spacing)*12)] max-w-md border-e",
						side === "right" &&
							"col-start-2 w-[calc(100%-var(--spacing)*12)] max-w-md border-s data-ending-style:translate-x-8 data-starting-style:translate-x-8",
						inset &&
							"before:hidden sm:rounded-2xl sm:border sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
						className,
					)}
					data-slot="sheet-popup"
					{...props}
				>
					{children}
					{showCloseButton && (
						<SheetPrimitive.Close
							aria-label="Close"
							className="absolute end-2 top-2"
							render={<Button size="icon" variant="ghost" />}
						>
							<CloseIcon />
						</SheetPrimitive.Close>
					)}
				</SheetPrimitive.Popup>
			</SheetViewport>
		</SheetPortal>
	);
}

type SheetHeaderProps = ComponentProps<"div">;

function SheetHeader({ className, ...props }: SheetHeaderProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-2 p-6 in-[[data-slot=sheet-popup]:has([data-slot=sheet-panel])]:pb-3 max-sm:pb-4",
				className,
			)}
			data-slot="sheet-header"
			{...props}
		/>
	);
}

type SheetFooterProps = ComponentProps<"div"> & {
	variant?: "default" | "bare";
};

function SheetFooter({
	className,
	variant = "default",
	...props
}: SheetFooterProps) {
	return (
		<div
			className={cn(
				"flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end",
				variant === "default" && "border-t bg-muted/50 py-4",
				variant === "bare" &&
					"in-[[data-slot=sheet-popup]:has([data-slot=sheet-panel])]:pt-3 pt-4 pb-6",
				className,
			)}
			data-slot="sheet-footer"
			{...props}
		/>
	);
}

type SheetTitleProps = SheetPrimitive.Title.Props;

function SheetTitle({ className, ...props }: SheetTitleProps) {
	return (
		<SheetPrimitive.Title
			className={cn("font-heading text-xl leading-none", className)}
			data-slot="sheet-title"
			{...props}
		/>
	);
}

type SheetDescriptionProps = SheetPrimitive.Description.Props;

function SheetDescription({ className, ...props }: SheetDescriptionProps) {
	return (
		<SheetPrimitive.Description
			className={cn("text-muted-foreground text-sm", className)}
			data-slot="sheet-description"
			{...props}
		/>
	);
}

type SheetPanelProps = ComponentProps<"div"> & { scrollFade?: boolean };

function SheetPanel({
	className,
	scrollFade = true,
	...props
}: SheetPanelProps) {
	return (
		<ScrollArea scrollFade={scrollFade}>
			<div
				className={cn(
					"px-6 in-[[data-slot=sheet-popup]:has([data-slot=sheet-header])]:pt-1 in-[[data-slot=sheet-popup]:not(:has([data-slot=sheet-header]))]:pt-6 in-[[data-slot=sheet-popup]:not(:has([data-slot=sheet-footer]))]:pb-6! in-[[data-slot=sheet-popup]:not(:has([data-slot=sheet-footer].border-t))]:pb-1 pb-6",
					className,
				)}
				data-slot="sheet-panel"
				{...props}
			/>
		</ScrollArea>
	);
}

export {
	Sheet,
	SheetTrigger,
	SheetPortal,
	SheetClose,
	SheetBackdrop,
	SheetBackdrop as SheetOverlay,
	SheetPopup,
	SheetPopup as SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
	SheetPanel,
	type SheetTriggerProps,
	type SheetCloseProps,
	type SheetBackdropProps,
	type SheetViewportProps,
	type SheetPopupProps,
	type SheetHeaderProps,
	type SheetFooterProps,
	type SheetTitleProps,
	type SheetDescriptionProps,
	type SheetPanelProps,
};
