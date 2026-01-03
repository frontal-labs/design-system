import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

type FrameProps = ComponentProps<"div"> & { stackedPanels?: boolean };

function Frame({ className, stackedPanels = false, ...props }: FrameProps) {
	return (
		<div
			className={cn(
				"relative flex flex-col rounded-2xl bg-muted/50 p-1",
				stackedPanels
					? "*:has-[+[data-slot=frame-panel]]:rounded-b-none *:has-[+[data-slot=frame-panel]]:before:hidden dark:*:has-[+[data-slot=frame-panel]]:before:block *:[[data-slot=frame-panel]+[data-slot=frame-panel]]:rounded-t-none *:[[data-slot=frame-panel]+[data-slot=frame-panel]]:border-t-0 dark:*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:before:hidden"
					: "*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",
				className,
			)}
			data-slot="frame"
			{...props}
		/>
	);
}

type FramePanelProps = ComponentProps<"div">;

function FramePanel({ className, ...props }: FramePanelProps) {
	return (
		<div
			className={cn(
				"relative rounded-xl border bg-background bg-clip-padding p-5 shadow-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
				className,
			)}
			data-slot="frame-panel"
			{...props}
		/>
	);
}

type FrameHeaderProps = ComponentProps<"header">;

function FrameHeader({ className, ...props }: FrameHeaderProps) {
	return (
		<header
			className={cn("flex flex-col px-5 py-4", className)}
			data-slot="frame-panel-header"
			{...props}
		/>
	);
}

type FrameTitleProps = ComponentProps<"div">;

function FrameTitle({ className, ...props }: FrameTitleProps) {
	return (
		<div
			className={cn("font-semibold text-sm", className)}
			data-slot="frame-panel-title"
			{...props}
		/>
	);
}

type FrameDescriptionProps = ComponentProps<"div">;

function FrameDescription({ className, ...props }: FrameDescriptionProps) {
	return (
		<div
			className={cn("text-muted-foreground text-sm", className)}
			data-slot="frame-panel-description"
			{...props}
		/>
	);
}

type FrameFooterProps = ComponentProps<"footer">;

function FrameFooter({ className, ...props }: FrameFooterProps) {
	return (
		<footer
			className={cn("flex flex-col gap-1 px-5 py-4", className)}
			data-slot="frame-panel-footer"
			{...props}
		/>
	);
}

export {
	Frame,
	FramePanel,
	FrameHeader,
	FrameTitle,
	FrameDescription,
	FrameFooter,
	type FrameProps,
	type FramePanelProps,
	type FrameHeaderProps,
	type FrameTitleProps,
	type FrameDescriptionProps,
	type FrameFooterProps,
};
