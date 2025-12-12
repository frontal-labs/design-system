"use client";

import {
	CheckboxGroupPrimitive,
	CheckboxPrimitive,
	RadioGroupPrimitive,
	RadioPrimitive,
} from "@frontal/primitives";
import { cn } from "@frontal/shared";
import type { ComponentProps, ReactNode } from "react";

// ChoiceboxGroup for single-select (radio) mode
function ChoiceboxGroup({ className, ...props }: RadioGroupPrimitive.Props) {
	return (
		<RadioGroupPrimitive
			className={cn("flex flex-col gap-3", className)}
			data-slot="choicebox-group"
			{...props}
		/>
	);
}

// ChoiceboxGroup for multi-select (checkbox) mode
function ChoiceboxCheckboxGroup({
	className,
	...props
}: CheckboxGroupPrimitive.Props) {
	return (
		<CheckboxGroupPrimitive
			className={cn("flex flex-col gap-3", className)}
			data-slot="choicebox-group"
			{...props}
		/>
	);
}

// Choicebox for single-select (radio) mode
function ChoiceboxItem({
	className,
	children,
	...props
}: RadioPrimitive.Root.Props & {
	children?: ReactNode;
}) {
	return (
		<RadioPrimitive.Root
			className={cn(
				"group/choicebox relative flex w-full cursor-pointer items-start gap-4 rounded-lg border border-border bg-background p-4 text-left outline-none transition-all hover:border-ring hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[checked]:border-primary data-[checked]:bg-primary/4 data-[checked]:hover:border-primary/80 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-64 data-[disabled]:hover:border-border data-[disabled]:hover:bg-background dark:data-[checked]:bg-primary/8",
				className,
			)}
			data-slot="choicebox"
			{...props}
		>
			<div className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background bg-clip-padding shadow-xs outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-full group-data-[checked]/choicebox:shadow-none group-data-[disabled]/choicebox:opacity-64 dark:group-data-[checked]/choicebox:bg-clip-border dark:not-group-data-[checked]/choicebox:bg-input/32 dark:not-group-data-[checked]/choicebox:before:shadow-[0_-1px_--theme(--color-white/8%)] not-group-data-[checked]/choicebox:not-group-data-[disabled]/choicebox:before:shadow-[0_1px_--theme(--color-black/4%)]">
				<RadioPrimitive.Indicator
					className="-inset-px absolute flex size-4 items-center justify-center rounded-full before:size-1.5 before:rounded-full before:bg-primary-foreground data-unchecked:hidden data-checked:bg-primary"
					data-slot="choicebox-indicator"
				/>
			</div>
			<div className="flex-1 min-w-0">{children}</div>
		</RadioPrimitive.Root>
	);
}

// Choicebox for multi-select (checkbox) mode
function ChoiceboxCheckboxItem({
	className,
	children,
	...props
}: CheckboxPrimitive.Root.Props & {
	children?: ReactNode;
}) {
	return (
		<CheckboxPrimitive.Root
			className={cn(
				"group/choicebox relative flex w-full cursor-pointer items-start gap-4 rounded-lg border border-border bg-background p-4 text-left outline-none transition-all hover:border-ring hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[checked]:border-primary data-[checked]:bg-primary/4 data-[checked]:hover:border-primary/80 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-64 data-[disabled]:hover:border-border data-[disabled]:hover:bg-background dark:data-[checked]:bg-primary/8",
				className,
			)}
			data-slot="choicebox"
			{...props}
		>
			<div className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-background bg-clip-padding shadow-xs outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[3px] group-data-[checked]/choicebox:shadow-none group-data-[disabled]/choicebox:opacity-64 dark:group-data-[checked]/choicebox:bg-clip-border dark:not-group-data-[checked]/choicebox:bg-input/32 dark:not-group-data-[checked]/choicebox:before:shadow-[0_-1px_--theme(--color-white/8%)] not-group-data-[checked]/choicebox:not-group-data-[disabled]/choicebox:before:shadow-[0_1px_--theme(--color-black/4%)]">
				<CheckboxPrimitive.Indicator
					className="-inset-px absolute flex items-center justify-center rounded-[4px] text-primary-foreground data-unchecked:hidden data-checked:bg-primary data-indeterminate:text-foreground"
					data-slot="choicebox-indicator"
					render={(props, state) => (
						<span {...props}>
							{state.indeterminate ? (
								<svg
									className="size-3"
									fill="none"
									height="24"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
									viewBox="0 0 24 24"
									width="24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<title>Indeterminate</title>
									<path d="M5.252 12h13.496" />
								</svg>
							) : (
								<svg
									className="size-3"
									fill="none"
									height="24"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
									viewBox="0 0 24 24"
									width="24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<title>Checked</title>
									<path d="M5.252 12.7l4.948 5.93l8.548-13.26" />
								</svg>
							)}
						</span>
					)}
				/>
			</div>
			<div className="flex-1 min-w-0">{children}</div>
		</CheckboxPrimitive.Root>
	);
}

// Helper components for choicebox content
function ChoiceboxTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"text-foreground font-medium text-sm leading-snug",
				className,
			)}
			data-slot="choicebox-title"
			{...props}
		/>
	);
}

function ChoiceboxDescription({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"text-muted-foreground mt-1 text-sm leading-normal",
				className,
			)}
			data-slot="choicebox-description"
			{...props}
		/>
	);
}

function ChoiceboxContent({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn("flex flex-col", className)}
			data-slot="choicebox-content"
			{...props}
		/>
	);
}

export {
	ChoiceboxGroup,
	ChoiceboxCheckboxGroup,
	ChoiceboxItem,
	ChoiceboxCheckboxItem,
	ChoiceboxTitle,
	ChoiceboxDescription,
	ChoiceboxContent,
};
