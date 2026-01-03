"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { ArrowRightChevronIcon } from "@frontal/icons";
import { cn } from "../utils";
import type { ComponentProps } from "react";

const Menu = MenuPrimitive.Root;

const MenuPortal = MenuPrimitive.Portal;

type MenuTriggerProps = MenuPrimitive.Trigger.Props & {
	asChild?: boolean;
};

function MenuTrigger({ asChild, children, ...props }: MenuTriggerProps) {
	if (asChild) {
		return (
			<MenuPrimitive.Trigger
				data-slot="menu-trigger"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<MenuPrimitive.Trigger data-slot="menu-trigger" {...props}>
			{children}
		</MenuPrimitive.Trigger>
	);
}

type MenuPopupProps = MenuPrimitive.Popup.Props & {
	align?: MenuPrimitive.Positioner.Props["align"];
	sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
	alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
	side?: MenuPrimitive.Positioner.Props["side"];
};

function MenuPopup({
	children,
	className,
	sideOffset = 4,
	align = "center",
	alignOffset,
	side = "bottom",
	...props
}: MenuPopupProps) {
	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner
				align={align}
				alignOffset={alignOffset}
				className="z-50"
				data-slot="menu-positioner"
				side={side}
				sideOffset={sideOffset}
			>
				<MenuPrimitive.Popup
					className={cn(
						"relative flex not-[class*='w-']:min-w-32 origin-(--transform-origin) rounded-lg border bg-popover bg-clip-padding shadow-lg outline-none transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] focus:outline-none has-data-starting-style:scale-98 has-data-starting-style:opacity-0 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						className,
					)}
					data-slot="menu-popup"
					{...props}
				>
					<div className="max-h-(--available-height) w-full overflow-y-auto p-1">
						{children}
					</div>
				</MenuPrimitive.Popup>
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	);
}

type MenuGroupProps = MenuPrimitive.Group.Props;

function MenuGroup(props: MenuGroupProps) {
	return <MenuPrimitive.Group data-slot="menu-group" {...props} />;
}

type MenuItemProps = MenuPrimitive.Item.Props & {
	inset?: boolean;
	variant?: "default" | "destructive";
	asChild?: boolean;
};

function MenuItem({
	className,
	inset,
	variant = "default",
	asChild,
	children,
	...props
}: MenuItemProps) {
	if (asChild) {
		return (
			<MenuPrimitive.Item
				className={cn(
					"[&_svg]:-mx-0.5 flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
					className,
				)}
				data-inset={inset}
				data-slot="menu-item"
				data-variant={variant}
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<MenuPrimitive.Item
			className={cn(
				"[&_svg]:-mx-0.5 flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			data-inset={inset}
			data-slot="menu-item"
			data-variant={variant}
			{...props}
		>
			{children}
		</MenuPrimitive.Item>
	);
}

type MenuCheckboxItemProps = MenuPrimitive.CheckboxItem.Props;

function MenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: MenuCheckboxItemProps) {
	return (
		<MenuPrimitive.CheckboxItem
			checked={checked}
			className={cn(
				"grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			data-slot="menu-checkbox-item"
			{...props}
		>
			<MenuPrimitive.CheckboxItemIndicator className="col-start-1">
				<svg
					aria-hidden="true"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
				</svg>
			</MenuPrimitive.CheckboxItemIndicator>
			<span className="col-start-2">{children}</span>
		</MenuPrimitive.CheckboxItem>
	);
}

type MenuRadioGroupProps = MenuPrimitive.RadioGroup.Props;

function MenuRadioGroup(props: MenuRadioGroupProps) {
	return <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...props} />;
}

type MenuRadioItemProps = MenuPrimitive.RadioItem.Props;

function MenuRadioItem({ className, children, ...props }: MenuRadioItemProps) {
	return (
		<MenuPrimitive.RadioItem
			className={cn(
				"grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			data-slot="menu-radio-item"
			{...props}
		>
			<MenuPrimitive.RadioItemIndicator className="col-start-1">
				<svg
					aria-hidden="true"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
				</svg>
			</MenuPrimitive.RadioItemIndicator>
			<span className="col-start-2">{children}</span>
		</MenuPrimitive.RadioItem>
	);
}

type MenuGroupLabelProps = MenuPrimitive.GroupLabel.Props & {
	inset?: boolean;
};

function MenuGroupLabel({ className, inset, ...props }: MenuGroupLabelProps) {
	return (
		<MenuPrimitive.GroupLabel
			className={cn(
				"px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8",
				className,
			)}
			data-inset={inset}
			data-slot="menu-label"
			{...props}
		/>
	);
}

type MenuSeparatorProps = MenuPrimitive.Separator.Props;

function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
	return (
		<MenuPrimitive.Separator
			className={cn("mx-2 my-1 h-px bg-border", className)}
			data-slot="menu-separator"
			{...props}
		/>
	);
}

type MenuShortcutProps = ComponentProps<"span">;

function MenuShortcut({ className, ...props }: MenuShortcutProps) {
	return (
		<span
			className={cn(
				"ms-auto font-medium text-muted-foreground/72 text-xs tracking-widest",
				className,
			)}
			data-slot="menu-shortcut"
			{...props}
		/>
	);
}

type MenuSubProps = MenuPrimitive.SubmenuRoot.Props;

function MenuSub(props: MenuSubProps) {
	return <MenuPrimitive.SubmenuRoot data-slot="menu-sub" {...props} />;
}

type MenuSubTriggerProps = MenuPrimitive.SubmenuTrigger.Props & {
	inset?: boolean;
};

function MenuSubTrigger({
	className,
	inset,
	children,
	...props
}: MenuSubTriggerProps) {
	return (
		<MenuPrimitive.SubmenuTrigger
			className={cn(
				"flex min-h-8 items-center gap-2 rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-popup-open:bg-accent data-inset:ps-8 data-highlighted:text-accent-foreground data-popup-open:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
				className,
			)}
			data-inset={inset}
			data-slot="menu-sub-trigger"
			{...props}
		>
			{children}
			<ArrowRightChevronIcon className="-me-0.5 ms-auto opacity-80" />
		</MenuPrimitive.SubmenuTrigger>
	);
}

type MenuSubPopupProps = MenuPrimitive.Popup.Props & {
	align?: MenuPrimitive.Positioner.Props["align"];
	sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
	alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
};

function MenuSubPopup({
	className,
	sideOffset = 0,
	alignOffset,
	align = "start",
	...props
}: MenuSubPopupProps) {
	const defaultAlignOffset = align !== "center" ? -5 : undefined;

	return (
		<MenuPopup
			align={align}
			alignOffset={alignOffset ?? defaultAlignOffset}
			className={className}
			data-slot="menu-sub-content"
			side="inline-end"
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

export {
	Menu,
	Menu as DropdownMenu,
	MenuPortal,
	MenuPortal as DropdownMenuPortal,
	MenuTrigger,
	MenuTrigger as DropdownMenuTrigger,
	MenuPopup,
	MenuPopup as DropdownMenuContent,
	MenuGroup,
	MenuGroup as DropdownMenuGroup,
	MenuItem,
	MenuItem as DropdownMenuItem,
	MenuCheckboxItem,
	MenuCheckboxItem as DropdownMenuCheckboxItem,
	MenuRadioGroup,
	MenuRadioGroup as DropdownMenuRadioGroup,
	MenuRadioItem,
	MenuRadioItem as DropdownMenuRadioItem,
	MenuGroupLabel,
	MenuGroupLabel as DropdownMenuLabel,
	MenuSeparator,
	MenuSeparator as DropdownMenuSeparator,
	MenuShortcut,
	MenuShortcut as DropdownMenuShortcut,
	MenuSub,
	MenuSub as DropdownMenuSub,
	MenuSubTrigger,
	MenuSubTrigger as DropdownMenuSubTrigger,
	MenuSubPopup,
	MenuSubPopup as DropdownMenuSubContent,
	type MenuTriggerProps,
	type MenuPopupProps,
	type MenuGroupProps,
	type MenuItemProps,
	type MenuCheckboxItemProps,
	type MenuRadioGroupProps,
	type MenuRadioItemProps,
	type MenuGroupLabelProps,
	type MenuSeparatorProps,
	type MenuShortcutProps,
	type MenuSubProps,
	type MenuSubTriggerProps,
	type MenuSubPopupProps,
};
