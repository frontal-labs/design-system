"use client";

import { ChevronsUpDownIcon } from "@frontal/icons";
import { PopoverPrimitive } from "@frontal/primitives";
import { cn } from "@frontal/shared";
import type { ComponentProps, KeyboardEvent, ReactNode } from "react";
import {
	createContext,
	forwardRef,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

// Context for managing focus state and selection
interface MultiSelectContextValue {
	selectedValues: Set<string | number>;
	onValueChange: (value: string | number, checked: boolean) => void;
	focusedRowIndex: number | null;
	focusedElement: "checkbox" | "button" | null;
	setFocusedRowIndex: (
		index: number | null,
		element?: "checkbox" | "button",
	) => void;
	items: Map<string | number, { value: string | number; label: string }>;
	registerItem: (value: string | number, label: string) => void;
	getItemIndex: (value: string | number) => number;
	popupOpen: boolean;
	setPopupOpen: (open: boolean) => void;
}

const MultiSelectContext = createContext<MultiSelectContextValue | undefined>(
	undefined,
);

function useMultiSelectContext() {
	const context = useContext(MultiSelectContext);
	if (!context) {
		throw new Error(
			"MultiSelect components must be used within MultiSelectRoot",
		);
	}
	return context;
}

interface MultiSelectRootProps
	extends Omit<PopoverPrimitive.Root.Props, "children"> {
	children: ReactNode;
	value?: Array<string | number>;
	defaultValue?: Array<string | number>;
	onValueChange?: (value: Array<string | number>) => void;
}

function MultiSelectRoot({
	children,
	value: controlledValue,
	defaultValue = [],
	onValueChange,
	open: openProp,
	onOpenChange: onOpenChangeProp,
	...props
}: MultiSelectRootProps) {
	const [uncontrolledValue, setUncontrolledValue] =
		useState<Array<string | number>>(defaultValue);
	const [focusedRowIndex, setFocusedRowIndex] = useState<number | null>(null);
	const [focusedElement, setFocusedElement] = useState<
		"checkbox" | "button" | null
	>(null);
	const [itemsMap, setItemsMap] = useState<
		Map<string | number, { value: string | number; label: string }>
	>(new Map());
	const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

	const isControlled = controlledValue !== undefined;
	const selectedValues = new Set(
		isControlled ? controlledValue : uncontrolledValue,
	);

	const isOpenControlled = openProp !== undefined;
	const popupOpen = isOpenControlled ? openProp : uncontrolledOpen;

	const handleValueChange = useCallback(
		(itemValue: string | number, checked: boolean) => {
			const newSet = new Set(selectedValues);
			if (checked) {
				newSet.add(itemValue);
			} else {
				newSet.delete(itemValue);
			}
			const newArray = Array.from(newSet);

			if (!isControlled) {
				setUncontrolledValue(newArray);
			}
			onValueChange?.(newArray);
		},
		[selectedValues, isControlled, onValueChange],
	);

	const registerItem = useCallback((value: string | number, label: string) => {
		setItemsMap((prev) => {
			if (prev.has(value)) {
				return prev;
			}
			const next = new Map(prev);
			next.set(value, { value, label });
			return next;
		});
	}, []);

	const getItemIndex = useCallback(
		(value: string | number) => {
			return Array.from(itemsMap.keys()).indexOf(value);
		},
		[itemsMap],
	);

	const handleOpenChange = useCallback(
		(open: boolean) => {
			if (!isOpenControlled) {
				setUncontrolledOpen(open);
			}
			onOpenChangeProp?.(open);
			if (!open) {
				setFocusedRowIndex(null);
				setFocusedElement(null);
			}
		},
		[isOpenControlled, onOpenChangeProp],
	);

	const setFocusedRowIndexWithElement = useCallback(
		(index: number | null, element?: "checkbox" | "button") => {
			setFocusedRowIndex(index);
			if (element !== undefined) {
				setFocusedElement(element);
			}
		},
		[],
	);

	const contextValue: MultiSelectContextValue = useMemo(
		() => ({
			selectedValues,
			onValueChange: handleValueChange,
			focusedRowIndex,
			focusedElement,
			setFocusedRowIndex: setFocusedRowIndexWithElement,
			items: itemsMap,
			registerItem,
			getItemIndex,
			popupOpen,
			setPopupOpen: handleOpenChange,
		}),
		[
			selectedValues,
			handleValueChange,
			focusedRowIndex,
			focusedElement,
			setFocusedRowIndexWithElement,
			itemsMap,
			registerItem,
			getItemIndex,
			popupOpen,
			handleOpenChange,
		],
	);

	return (
		<MultiSelectContext.Provider value={contextValue}>
			<PopoverPrimitive.Root
				open={popupOpen}
				onOpenChange={handleOpenChange}
				{...props}
			>
				{children}
			</PopoverPrimitive.Root>
		</MultiSelectContext.Provider>
	);
}

interface MultiSelectTriggerProps
	extends ComponentProps<typeof PopoverPrimitive.Trigger> {
	placeholder?: string;
	size?: "sm" | "default" | "lg";
}

function MultiSelectTrigger({
	className,
	placeholder = "Select items...",
	size = "default",
	...props
}: MultiSelectTriggerProps) {
	const { selectedValues, items: itemsMap } = useMultiSelectContext();
	const items = Array.from(itemsMap.values());
	const selectedCount = selectedValues.size;

	const displayText =
		selectedCount === 0
			? placeholder
			: selectedCount === 1
				? items.find((item) => selectedValues.has(item.value))?.label ||
					`${selectedCount} selected`
				: `${selectedCount} items selected`;

	return (
		<PopoverPrimitive.Trigger
			className={cn(
				"relative inline-flex w-full min-w-36 select-none items-center justify-between gap-2 rounded-lg border border-input bg-background bg-clip-padding px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] text-left text-base/5 shadow-xs outline-none ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 data-disabled:pointer-events-none data-placeholder:text-muted-foreground data-disabled:opacity-64 sm:text-sm dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:opacity-72 [[data-disabled],:focus-visible,[aria-invalid],[data-pressed]]:shadow-none",
				size === "sm" &&
					"gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
				size === "lg" && "py-[calc(--spacing(2)-1px)]",
				selectedCount === 0 && "data-placeholder",
				className,
			)}
			data-slot="multi-select-trigger"
			{...props}
		>
			<span className="flex-1 truncate">{displayText}</span>
			<ChevronsUpDownIcon className="-me-1 size-4 opacity-72" />
		</PopoverPrimitive.Trigger>
	);
}

interface MultiSelectPopupProps extends PopoverPrimitive.Popup.Props {
	sideOffset?: number;
	side?: PopoverPrimitive.Positioner.Props["side"];
	align?: PopoverPrimitive.Positioner.Props["align"];
}

function MultiSelectPopup({
	className,
	children,
	sideOffset = 4,
	side = "bottom",
	align = "start",
	...props
}: MultiSelectPopupProps) {
	const { popupOpen } = useMultiSelectContext();

	if (!popupOpen) return null;

	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner
				sideOffset={sideOffset}
				side={side}
				align={align}
				className="z-50 select-none"
				data-slot="multi-select-positioner"
			>
				<PopoverPrimitive.Popup
					className={cn(
						"origin-(--transform-origin) transition-[scale,opacity] has-data-starting-style:scale-98 has-data-starting-style:opacity-0",
						className,
					)}
					data-slot="multi-select-popup"
					{...props}
				>
					<div className="relative block h-full rounded-lg border bg-popover bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-lg dark:not-in-data-[slot=group]:bg-clip-border">
						<PopoverPrimitive.Viewport
							className={cn(
								"relative size-full max-h-[min(var(--available-height),23rem)] overflow-y-auto p-1 outline-none",
							)}
							data-slot="multi-select-viewport"
						>
							{children}
						</PopoverPrimitive.Viewport>
					</div>
				</PopoverPrimitive.Popup>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
}

// Store refs globally for keyboard navigation
const itemRefs = new Map<
	number,
	{
		checkbox: HTMLButtonElement | null;
		button: HTMLButtonElement | null;
		row: HTMLDivElement | null;
	}
>();

interface MultiSelectItemProps {
	value: string | number;
	children: ReactNode;
	className?: string;
	disabled?: boolean;
}

const MultiSelectItem = forwardRef<HTMLDivElement, MultiSelectItemProps>(
	({ value, children, className, disabled, ...props }, forwardedRef) => {
		const {
			selectedValues,
			onValueChange,
			focusedRowIndex,
			focusedElement,
			setFocusedRowIndex,
			registerItem,
			items: itemsMap,
			getItemIndex,
		} = useMultiSelectContext();

		const checkboxRef = useRef<HTMLButtonElement>(null);
		const buttonRef = useRef<HTMLButtonElement>(null);
		const rowRef = useRef<HTMLDivElement>(null);

		// Register this item
		useEffect(() => {
			const label = typeof children === "string" ? children : String(value);
			registerItem(value, label);
		}, [value, children, registerItem]);

		const itemIndex = getItemIndex(value);
		const items = Array.from(itemsMap.values());

		// Register refs for keyboard navigation
		useEffect(() => {
			if (itemIndex >= 0) {
				itemRefs.set(itemIndex, {
					checkbox: checkboxRef.current,
					button: buttonRef.current,
					row: rowRef.current,
				});
			}
			return () => {
				if (itemIndex >= 0) {
					itemRefs.delete(itemIndex);
				}
			};
		}, [itemIndex]);

		// Focus management
		useEffect(() => {
			if (focusedRowIndex === itemIndex && itemIndex >= 0) {
				// Use a small delay to ensure refs are set
				requestAnimationFrame(() => {
					if (focusedElement === "button") {
						const button = itemRefs.get(itemIndex)?.button;
						if (button) {
							button.focus();
						}
					} else {
						// For checkbox, find the focusable element (checkbox root or its button)
						const row = itemRefs.get(itemIndex)?.row;
						if (row) {
							const checkboxElement = row.querySelector<HTMLElement>(
								'[data-slot="checkbox"]',
							);
							if (checkboxElement) {
								checkboxElement.focus();
							}
						}
					}
				});
			}
		}, [focusedRowIndex, focusedElement, itemIndex]);

		const isSelected = selectedValues.has(value);
		const isFocused = focusedRowIndex === itemIndex;
		const checkboxFocused = isFocused && focusedElement === "checkbox";
		const buttonFocused = isFocused && focusedElement === "button";

		const handleCheckboxChange = useCallback(
			(checked: boolean) => {
				onValueChange(value, checked);
			},
			[value, onValueChange],
		);

		const handleButtonClick = useCallback(() => {
			// Smart selection: select only, select all, or toggle based on context
			const allSelected = items.every((item) => selectedValues.has(item.value));
			const someSelected = selectedValues.size > 0;

			if (allSelected) {
				// Select only this item
				selectedValues.forEach((v) => {
					if (v !== value) {
						onValueChange(v, false);
					}
				});
				if (!isSelected) {
					onValueChange(value, true);
				}
			} else if (someSelected && !isSelected) {
				// Add this item to selection
				onValueChange(value, true);
			} else {
				// Toggle this item
				onValueChange(value, !isSelected);
			}
		}, [value, isSelected, items, selectedValues, onValueChange]);

		const handleCheckboxFocus = useCallback(() => {
			setFocusedRowIndex(itemIndex, "checkbox");
		}, [itemIndex, setFocusedRowIndex]);

		const handleButtonFocus = useCallback(() => {
			setFocusedRowIndex(itemIndex, "button");
		}, [itemIndex, setFocusedRowIndex]);

		const handleCheckboxKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (e.key === "ArrowRight") {
					e.preventDefault();
					setFocusedRowIndex(itemIndex, "button");
				} else if (e.key === "ArrowDown") {
					e.preventDefault();
					const nextIndex = itemIndex + 1;
					if (nextIndex < items.length) {
						setFocusedRowIndex(nextIndex, "checkbox");
					}
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					const prevIndex = itemIndex - 1;
					if (prevIndex >= 0) {
						setFocusedRowIndex(prevIndex, "checkbox");
					}
				}
			},
			[itemIndex, items.length, setFocusedRowIndex],
		);

		const handleButtonKeyDown = useCallback(
			(e: KeyboardEvent) => {
				if (e.key === "ArrowLeft") {
					e.preventDefault();
					setFocusedRowIndex(itemIndex, "checkbox");
				} else if (e.key === "ArrowDown") {
					e.preventDefault();
					const nextIndex = itemIndex + 1;
					if (nextIndex < items.length) {
						setFocusedRowIndex(nextIndex, "button");
					}
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					const prevIndex = itemIndex - 1;
					if (prevIndex >= 0) {
						setFocusedRowIndex(prevIndex, "button");
					}
				}
			},
			[itemIndex, items.length, setFocusedRowIndex],
		);

		// Determine action label
		const allSelected = items.every((item) => selectedValues.has(item.value));
		const someSelected = selectedValues.size > 0;

		let actionLabel = "";
		if (allSelected) {
			actionLabel = "Select Only";
		} else if (someSelected && !isSelected) {
			actionLabel = "Select";
		} else {
			actionLabel = isSelected ? "Deselect" : "Select";
		}

		const label = typeof children === "string" ? children : String(value);

		return (
			<div
				ref={(el) => {
					rowRef.current = el;
					if (typeof forwardedRef === "function") {
						forwardedRef(el);
					} else if (forwardedRef) {
						forwardedRef.current = el;
					}
				}}
				className={cn(
					"group/item relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-base outline-none transition-colors hover:bg-accent data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm",
					(isFocused || checkboxFocused || buttonFocused) && "bg-accent",
					className,
				)}
				data-slot="multi-select-item"
				data-value={value}
				data-selected={isSelected}
				{...props}
			>
				<Checkbox
					checked={isSelected}
					onCheckedChange={handleCheckboxChange}
					disabled={disabled}
					onFocus={handleCheckboxFocus}
					onKeyDown={handleCheckboxKeyDown}
					tabIndex={checkboxFocused ? 0 : -1}
					aria-label={`${isSelected ? "Unselect" : "Select"} ${label}`}
					className="shrink-0"
				/>
				<span className="flex-1 truncate">{children}</span>
				<Button
					ref={buttonRef}
					variant="ghost"
					size="sm"
					className={cn(
						"h-7 px-2 text-xs opacity-0 transition-opacity group-hover/item:opacity-100 focus:opacity-100",
						buttonFocused && "opacity-100",
					)}
					onClick={handleButtonClick}
					disabled={disabled}
					onFocus={handleButtonFocus}
					onKeyDown={handleButtonKeyDown}
					tabIndex={buttonFocused ? 0 : -1}
					aria-label={actionLabel}
				>
					<span className="sr-only">{actionLabel}</span>
					<span aria-hidden="true" className="not-sr-only">
						{actionLabel}
					</span>
				</Button>
			</div>
		);
	},
);

MultiSelectItem.displayName = "MultiSelectItem";

interface MultiSelectListProps extends ComponentProps<"div"> {
	children: ReactNode;
}

function MultiSelectList({
	children,
	className,
	...props
}: MultiSelectListProps) {
	return (
		<div
			className={cn("flex flex-col", className)}
			data-slot="multi-select-list"
			role="listbox"
			{...props}
		>
			{children}
		</div>
	);
}

interface MultiSelectGroupProps {
	children: ReactNode;
	className?: string;
}

function MultiSelectGroup({
	children,
	className,
	...props
}: MultiSelectGroupProps) {
	return (
		<div
			className={cn("flex flex-col", className)}
			data-slot="multi-select-group"
			{...props}
		>
			{children}
		</div>
	);
}

interface MultiSelectGroupLabelProps extends ComponentProps<"div"> {
	children: ReactNode;
}

function MultiSelectGroupLabel({
	children,
	className,
	...props
}: MultiSelectGroupLabelProps) {
	return (
		<div
			className={cn(
				"px-2 py-1.5 font-medium text-muted-foreground text-xs",
				className,
			)}
			data-slot="multi-select-group-label"
			{...props}
		>
			{children}
		</div>
	);
}

interface MultiSelectSeparatorProps extends ComponentProps<"div"> {}

function MultiSelectSeparator({
	className,
	...props
}: MultiSelectSeparatorProps) {
	return (
		<div
			className={cn("mx-2 my-1 h-px bg-border", className)}
			data-slot="multi-select-separator"
			{...props}
		/>
	);
}

export {
	MultiSelectRoot as MultiSelect,
	MultiSelectTrigger,
	MultiSelectPopup,
	MultiSelectPopup as MultiSelectContent,
	MultiSelectList,
	MultiSelectItem,
	MultiSelectGroup,
	MultiSelectGroupLabel,
	MultiSelectSeparator,
};
