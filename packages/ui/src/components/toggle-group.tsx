"use client";

import type { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { cn } from "../utils";
import type { VariantProps } from "class-variance-authority";
import { type ComponentProps, createContext, useContext } from "react";
import { Separator } from "./separator";
import { Toggle as ToggleComponent, type toggleVariants } from "./toggle";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
	size: "default",
	variant: "default",
});

type ToggleGroupProps = ToggleGroupPrimitive.Props &
	VariantProps<typeof toggleVariants>;

function ToggleGroup({
	className,
	variant = "default",
	size = "default",
	orientation = "horizontal",
	children,
	...props
}: ToggleGroupProps) {
	return (
		<ToggleGroupPrimitive
			className={cn(
				"flex w-fit *:focus-visible:z-10",
				orientation === "horizontal"
					? "*:pointer-coarse:after:min-w-auto"
					: "*:pointer-coarse:after:min-h-auto",
				variant === "default"
					? "gap-0.5"
					: orientation === "horizontal"
						? "*:not-first:before:-start-[0.5px] *:not-last:before:-end-[0.5px] *:not-first:rounded-s-none *:not-last:rounded-e-none *:not-first:border-s-0 *:not-last:border-e-0 *:not-first:before:rounded-s-none *:not-last:before:rounded-e-none"
						: "*:not-first:before:-top-[0.5px] *:not-last:before:-bottom-[0.5px] flex-col *:not-first:rounded-t-none *:not-last:rounded-b-none *:not-first:border-t-0 *:not-last:border-b-0 *:not-last:before:hidden *:not-first:before:rounded-t-none *:not-last:before:rounded-b-none dark:*:last:before:hidden dark:*:first:before:block",
				className,
			)}
			data-size={size}
			data-slot="toggle-group"
			data-variant={variant}
			orientation={orientation}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ size, variant }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive>
	);
}

type ToggleGroupToggleProps = TogglePrimitive.Props &
	VariantProps<typeof toggleVariants>;

function Toggle({
	className,
	children,
	variant,
	size,
	...props
}: ToggleGroupToggleProps) {
	const context = useContext(ToggleGroupContext);

	const resolvedVariant = context.variant || variant;
	const resolvedSize = context.size || size;

	return (
		<ToggleComponent
			className={className}
			data-size={resolvedSize}
			data-variant={resolvedVariant}
			size={resolvedSize}
			variant={resolvedVariant}
			{...props}
		>
			{children}
		</ToggleComponent>
	);
}

type ToggleGroupSeparatorProps = {
	className?: string;
} & ComponentProps<typeof Separator>;

function ToggleGroupSeparator({
	className,
	orientation = "vertical",
	...props
}: ToggleGroupSeparatorProps) {
	return (
		<Separator className={className} orientation={orientation} {...props} />
	);
}

export {
	ToggleGroup,
	Toggle,
	Toggle as ToggleGroupItem,
	ToggleGroupSeparator,
	type ToggleGroupProps,
	type ToggleGroupToggleProps,
	type ToggleGroupSeparatorProps,
};
