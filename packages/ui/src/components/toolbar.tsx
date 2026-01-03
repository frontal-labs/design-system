"use client";

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "../utils";

type ToolbarProps = ToolbarPrimitive.Root.Props;

function Toolbar({ className, ...props }: ToolbarProps) {
	return (
		<ToolbarPrimitive.Root
			className={cn(
				"relative flex gap-2 rounded-xl border bg-card bg-clip-padding p-1 text-card-foreground",
				className,
			)}
			data-slot="toolbar"
			{...props}
		/>
	);
}

type ToolbarButtonProps = ToolbarPrimitive.Button.Props;

function ToolbarButton({ className, ...props }: ToolbarButtonProps) {
	return (
		<ToolbarPrimitive.Button
			className={cn(className)}
			data-slot="toolbar-button"
			{...props}
		/>
	);
}

type ToolbarLinkProps = ToolbarPrimitive.Link.Props;

function ToolbarLink({ className, ...props }: ToolbarLinkProps) {
	return (
		<ToolbarPrimitive.Link
			className={cn(className)}
			data-slot="toolbar-link"
			{...props}
		/>
	);
}

type ToolbarInputProps = ToolbarPrimitive.Input.Props;

function ToolbarInput({ className, children, ...props }: ToolbarInputProps) {
	return (
		<ToolbarPrimitive.Input
			className={cn(className)}
			data-slot="toolbar-input"
			{...props}
		/>
	);
}

type ToolbarGroupProps = ToolbarPrimitive.Group.Props;

function ToolbarGroup({ className, ...props }: ToolbarGroupProps) {
	return (
		<ToolbarPrimitive.Group
			className={cn("flex items-center gap-1", className)}
			data-slot="toolbar-group"
			{...props}
		/>
	);
}

type ToolbarSeparatorProps = ToolbarPrimitive.Separator.Props;

function ToolbarSeparator({ className, ...props }: ToolbarSeparatorProps) {
	return (
		<ToolbarPrimitive.Separator
			className={cn(
				"shrink-0 bg-border data-[orientation=horizontal]:my-0.5 data-[orientation=vertical]:my-1.5 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
				className,
			)}
			data-slot="toolbar-separator"
			{...props}
		/>
	);
}

export {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarButton,
	ToolbarLink,
	ToolbarInput,
	type ToolbarProps,
	type ToolbarButtonProps,
	type ToolbarLinkProps,
	type ToolbarInputProps,
	type ToolbarGroupProps,
	type ToolbarSeparatorProps,
};
