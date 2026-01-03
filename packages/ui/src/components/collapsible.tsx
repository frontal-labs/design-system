"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils";

type CollapsibleProps = Omit<CollapsiblePrimitive.Root.Props, "className"> & {
	asChild?: boolean;
	className?: string; // Explicitly restrict to string
};

function Collapsible({ asChild, className, ...props }: CollapsibleProps) {
	const Comp = asChild ? Slot : CollapsiblePrimitive.Root;
	return <Comp data-slot="collapsible" className={className} {...props} />;
}

type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props & {
	asChild?: boolean;
};

function CollapsibleTrigger({
	className,
	asChild,
	children,
	...props
}: CollapsibleTriggerProps) {
	if (asChild) {
		return (
			<CollapsiblePrimitive.Trigger
				className={cn("cursor-pointer", className)}
				data-slot="collapsible-trigger"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<CollapsiblePrimitive.Trigger
			className={cn("cursor-pointer", className)}
			data-slot="collapsible-trigger"
			{...props}
		>
			{children}
		</CollapsiblePrimitive.Trigger>
	);
}

type CollapsiblePanelProps = CollapsiblePrimitive.Panel.Props & {
	forceMount?: boolean;
};

function CollapsiblePanel({
	className,
	forceMount,
	...props
}: CollapsiblePanelProps) {
	return (
		<CollapsiblePrimitive.Panel
			className={cn(
				"h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0",
				className,
			)}
			data-slot="collapsible-panel"
			{...props}
		/>
	);
}

export {
	Collapsible,
	CollapsibleTrigger,
	CollapsiblePanel,
	CollapsiblePanel as CollapsibleContent,
	type CollapsibleProps,
	type CollapsibleTriggerProps,
	type CollapsiblePanelProps,
};
