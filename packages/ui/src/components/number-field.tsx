"use client";

import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { AddIcon, SubtractIcon } from "@frontal/icons";
import { type ComponentProps, createContext, useContext, useId } from "react";
import { cn } from "../utils";
import { Label } from "./label";

const NumberFieldContext = createContext<{
	fieldId: string;
} | null>(null);

type NumberFieldProps = NumberFieldPrimitive.Root.Props & {
	size?: "small" | "medium" | "large";
};

function NumberField({
	id,
	className,
	size = "medium",
	...props
}: NumberFieldProps) {
	const generatedId = useId();
	const fieldId = id ?? generatedId;

	return (
		<NumberFieldContext.Provider value={{ fieldId }}>
			<NumberFieldPrimitive.Root
				className={cn("flex w-full flex-col items-start gap-2", className)}
				data-size={size}
				data-slot="number-field"
				id={fieldId}
				{...props}
			/>
		</NumberFieldContext.Provider>
	);
}

type NumberFieldGroupProps = NumberFieldPrimitive.Group.Props;

function NumberFieldGroup({ className, ...props }: NumberFieldGroupProps) {
	return (
		<NumberFieldPrimitive.Group
			className={cn(
				"relative flex w-full justify-between rounded-lg border border-input bg-background bg-clip-padding text-base shadow-xs ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] has-aria-invalid:border-destructive/36 focus-within:has-aria-invalid:border-destructive/64 focus-within:has-aria-invalid:ring-destructive/48 data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:has-aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-disabled],:focus-within,[aria-invalid]]:shadow-none",
				className,
			)}
			data-slot="number-field-group"
			{...props}
		/>
	);
}

type NumberFieldDecrementProps = NumberFieldPrimitive.Decrement.Props;

function NumberFieldDecrement({
	className,
	...props
}: NumberFieldDecrementProps) {
	return (
		<NumberFieldPrimitive.Decrement
			className={cn(
				"relative flex shrink-0 cursor-pointer items-center justify-center rounded-s-[calc(var(--radius-lg)-1px)] in-data-[size=small]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent",
				className,
			)}
			data-slot="number-field-decrement"
			{...props}
		>
			<SubtractIcon />
		</NumberFieldPrimitive.Decrement>
	);
}

type NumberFieldIncrementProps = NumberFieldPrimitive.Increment.Props;

function NumberFieldIncrement({
	className,
	...props
}: NumberFieldIncrementProps) {
	return (
		<NumberFieldPrimitive.Increment
			className={cn(
				"relative flex shrink-0 cursor-pointer items-center justify-center rounded-e-[calc(var(--radius-lg)-1px)] in-data-[size=small]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent",
				className,
			)}
			data-slot="number-field-increment"
			{...props}
		>
			<AddIcon />
		</NumberFieldPrimitive.Increment>
	);
}

type NumberFieldInputProps = NumberFieldPrimitive.Input.Props;

function NumberFieldInput({
	className,
	children,
	...props
}: NumberFieldInputProps) {
	return (
		<NumberFieldPrimitive.Input
			className={cn(
				"h-8.5 in-data-[size=large]:h-9.5 in-data-[size=small]:h-7.5 w-full min-w-0 grow bg-transparent in-data-[size=small]:px-[calc(var(--spacing)*2.5-1px)] px-[calc(var(--spacing)*3-1px)] text-center tabular-nums in-data-[size=large]:leading-9.5 in-data-[size=small]:leading-7.5 leading-8.5 outline-none sm:h-7.5 sm:in-data-[size=large]:h-8.5 sm:in-data-[size=small]:h-6.5 sm:in-data-[size=large]:leading-8.5 sm:in-data-[size=small]:leading-8.5 sm:leading-7.5",
				className,
			)}
			data-slot="number-field-input"
			{...props}
		/>
	);
}

type NumberFieldScrubAreaProps = NumberFieldPrimitive.ScrubArea.Props & {
	label: string;
};

function NumberFieldScrubArea({
	className,
	label,
	...props
}: NumberFieldScrubAreaProps) {
	const context = useContext(NumberFieldContext);

	if (!context) {
		throw new Error(
			"NumberFieldScrubArea must be used within a NumberField component for accessibility.",
		);
	}

	return (
		<NumberFieldPrimitive.ScrubArea
			className={cn("flex cursor-ew-resize", className)}
			data-slot="number-field-scrub-area"
			{...props}
		>
			<Label className="cursor-ew-resize" htmlFor={context.fieldId}>
				{label}
			</Label>
			<NumberFieldPrimitive.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
				<CursorGrowIcon />
			</NumberFieldPrimitive.ScrubAreaCursor>
		</NumberFieldPrimitive.ScrubArea>
	);
}

type CursorGrowIconProps = ComponentProps<"svg">;

function CursorGrowIcon(props: CursorGrowIconProps) {
	return (
		<svg
			aria-hidden="true"
			fill="black"
			height="14"
			stroke="white"
			viewBox="0 0 24 14"
			width="26"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
		</svg>
	);
}

export {
	NumberField,
	NumberFieldScrubArea,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldGroup,
	NumberFieldInput,
	type NumberFieldProps,
	type NumberFieldGroupProps,
	type NumberFieldDecrementProps,
	type NumberFieldIncrementProps,
	type NumberFieldInputProps,
	type NumberFieldScrubAreaProps,
};
