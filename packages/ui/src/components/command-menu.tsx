"use client";

import { Dialog as CommandDialogPrimitive } from "@base-ui/react/dialog";
import { SearchIcon } from "@frontal/icons";
import {
	type ComponentProps,
	createContext,
	type RefObject,
	useContext,
	useRef,
} from "react";
import { cn } from "../utils";
import {
	Autocomplete,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteSeparator,
} from "./autocomplete";

const CommandMenuInputContext = createContext<{
	inputRef: RefObject<HTMLInputElement | null> | null;
}>({
	inputRef: null,
});

const CommandMenuDialog = CommandDialogPrimitive.Root;

const CommandMenuDialogPortal = CommandDialogPrimitive.Portal;

type CommandMenuDialogTriggerProps = CommandDialogPrimitive.Trigger.Props;

function CommandMenuDialogTrigger(props: CommandMenuDialogTriggerProps) {
	return (
		<CommandDialogPrimitive.Trigger
			data-slot="command-menu-dialog-trigger"
			{...props}
		/>
	);
}

type CommandMenuDialogBackdropProps = CommandDialogPrimitive.Backdrop.Props;

function CommandMenuDialogBackdrop({
	className,
	...props
}: CommandMenuDialogBackdropProps) {
	return (
		<CommandDialogPrimitive.Backdrop
			className={cn(
				"fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			data-slot="command-menu-dialog-backdrop"
			{...props}
		/>
	);
}

type CommandMenuDialogViewportProps = CommandDialogPrimitive.Viewport.Props;

function CommandMenuDialogViewport({
	className,
	...props
}: CommandMenuDialogViewportProps) {
	return (
		<CommandDialogPrimitive.Viewport
			className={cn(
				"fixed inset-0 z-50 flex flex-col items-center px-4 py-[max(calc(var(--spacing)*4),4vh)] sm:py-[10vh]",
				className,
			)}
			data-slot="command-menu-dialog-viewport"
			{...props}
		/>
	);
}

type CommandMenuDialogPopupProps = CommandDialogPrimitive.Popup.Props;

function CommandMenuDialogPopup({
	className,
	children,
	...props
}: CommandMenuDialogPopupProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<CommandMenuDialogPortal>
			<CommandMenuDialogBackdrop />
			<CommandMenuDialogViewport>
				<CommandDialogPrimitive.Popup
					className={cn(
						"-translate-y-[calc(1.25rem*var(--nested-dialogs))] relative row-start-2 flex max-h-100 min-h-0 w-full min-w-0 max-w-xl scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-2xl border bg-popover bg-clip-padding text-popover-foreground opacity-[calc(1-0.1*var(--nested-dialogs))] shadow-lg transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:bg-muted/50 before:shadow-[0_1px_--theme(--color-black/4%)] data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 **:data-[slot=scroll-area-viewport]:data-has-overflow-y:pe-1 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						className,
					)}
					data-slot="command-menu-dialog-popup"
					initialFocus={inputRef}
					{...props}
				>
					<CommandMenuInputContext.Provider value={{ inputRef }}>
						{children}
					</CommandMenuInputContext.Provider>
				</CommandDialogPrimitive.Popup>
			</CommandMenuDialogViewport>
		</CommandMenuDialogPortal>
	);
}

type CommandMenuProps = ComponentProps<typeof Autocomplete>;

function CommandMenu({
	autoHighlight = "always",
	keepHighlight = true,
	open = true,
	...props
}: CommandMenuProps) {
	return (
		<Autocomplete
			autoHighlight={autoHighlight}
			keepHighlight={keepHighlight}
			open={open}
			{...props}
		/>
	);
}

type CommandMenuInputProps = ComponentProps<typeof AutocompleteInput>;

function CommandMenuInput({
	className,
	placeholder = undefined,
	...props
}: CommandMenuInputProps) {
	const { inputRef } = useContext(CommandMenuInputContext);

	return (
		<div className="px-2.5 py-1.5">
			<AutocompleteInput
				className={cn(
					"border-transparent! bg-transparent! shadow-none before:hidden has-focus-visible:ring-0",
					className,
				)}
				placeholder={placeholder}
				ref={inputRef}
				size="large"
				startAddon={<SearchIcon />}
				{...props}
			/>
		</div>
	);
}

type CommandMenuListProps = ComponentProps<typeof AutocompleteList>;

function CommandMenuList({ className, ...props }: CommandMenuListProps) {
	return (
		<AutocompleteList
			className={cn("not-empty:scroll-py-2 not-empty:p-2", className)}
			data-slot="command-menu-list"
			{...props}
		/>
	);
}

type CommandMenuEmptyProps = ComponentProps<typeof AutocompleteEmpty>;

function CommandMenuEmpty({ className, ...props }: CommandMenuEmptyProps) {
	return (
		<AutocompleteEmpty
			className={cn("not-empty:py-6", className)}
			data-slot="command-menu-empty"
			{...props}
		/>
	);
}

type CommandMenuPanelProps = ComponentProps<"div">;

function CommandMenuPanel({ className, ...props }: CommandMenuPanelProps) {
	return (
		<div
			className="-mx-px relative min-h-0 rounded-t-xl border bg-popover bg-clip-padding shadow-xs [clip-path:inset(0_1px)] before:pointer-events-none before:absolute before:inset-0 before:rounded-t-[calc(var(--radius-xl)-1px)] **:data-[slot=scroll-area-scrollbar]:mt-2 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]"
			{...props}
		/>
	);
}

type CommandMenuGroupProps = ComponentProps<typeof AutocompleteGroup>;

function CommandMenuGroup({ className, ...props }: CommandMenuGroupProps) {
	return (
		<AutocompleteGroup
			className={className}
			data-slot="command-menu-group"
			{...props}
		/>
	);
}

type CommandMenuGroupLabelProps = ComponentProps<typeof AutocompleteGroupLabel>;

function CommandMenuGroupLabel({
	className,
	...props
}: CommandMenuGroupLabelProps) {
	return (
		<AutocompleteGroupLabel
			className={className}
			data-slot="command-menu-group-label"
			{...props}
		/>
	);
}

type CommandMenuCollectionProps = ComponentProps<typeof AutocompleteCollection>;

function CommandMenuCollection({ ...props }: CommandMenuCollectionProps) {
	return (
		<AutocompleteCollection data-slot="command-menu-collection" {...props} />
	);
}

type CommandMenuItemProps = ComponentProps<typeof AutocompleteItem>;

function CommandMenuItem({ className, ...props }: CommandMenuItemProps) {
	return (
		<AutocompleteItem
			className={cn("py-1.5", className)}
			data-slot="command-menu-item"
			{...props}
		/>
	);
}

type CommandMenuSeparatorProps = ComponentProps<typeof AutocompleteSeparator>;

function CommandMenuSeparator({
	className,
	...props
}: CommandMenuSeparatorProps) {
	return (
		<AutocompleteSeparator
			className={cn("my-2", className)}
			data-slot="command-menu-separator"
			{...props}
		/>
	);
}

type CommandMenuShortcutProps = ComponentProps<"kbd">;

function CommandMenuShortcut({
	className,
	...props
}: CommandMenuShortcutProps) {
	return (
		<span
			className={cn(
				"ms-auto font-medium text-muted-foreground/72 text-xs tracking-widest",
				className,
			)}
			data-slot="command-menu-shortcut"
			{...props}
		/>
	);
}

type CommandMenuFooterProps = ComponentProps<"div">;

function CommandMenuFooter({ className, ...props }: CommandMenuFooterProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-between gap-2 rounded-b-[calc(var(--radius-2xl)-1px)] px-5 py-3 text-muted-foreground text-xs",
				className,
			)}
			data-slot="command-menu-footer"
			{...props}
		/>
	);
}

export {
	CommandMenu,
	CommandMenuCollection,
	CommandMenuDialog,
	CommandMenuDialogPopup,
	CommandMenuDialogTrigger,
	CommandMenuEmpty,
	CommandMenuFooter,
	CommandMenuGroup,
	CommandMenuGroupLabel,
	CommandMenuInput,
	CommandMenuItem,
	CommandMenuList,
	CommandMenuPanel,
	CommandMenuSeparator,
	CommandMenuShortcut,
	type CommandMenuDialogTriggerProps,
	type CommandMenuDialogBackdropProps,
	type CommandMenuDialogViewportProps,
	type CommandMenuDialogPopupProps,
	type CommandMenuProps,
	type CommandMenuInputProps,
	type CommandMenuListProps,
	type CommandMenuEmptyProps,
	type CommandMenuPanelProps,
	type CommandMenuGroupProps,
	type CommandMenuGroupLabelProps,
	type CommandMenuCollectionProps,
	type CommandMenuItemProps,
	type CommandMenuSeparatorProps,
	type CommandMenuShortcutProps,
	type CommandMenuFooterProps,
};
