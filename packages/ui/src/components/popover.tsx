"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "@frontal/shared";

const PopoverCreateHandle = PopoverPrimitive.createHandle;

const Popover = PopoverPrimitive.Root;

type PopoverTriggerProps = PopoverPrimitive.Trigger.Props & {
	asChild?: boolean;
};

function PopoverTrigger({ asChild, children, ...props }: PopoverTriggerProps) {
	if (asChild) {
		return (
			<PopoverPrimitive.Trigger
				data-slot="popover-trigger"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<PopoverPrimitive.Trigger data-slot="popover-trigger" {...props}>
			{children}
		</PopoverPrimitive.Trigger>
	);
}

type PopoverContentProps = PopoverPrimitive.Popup.Props & {
	side?: PopoverPrimitive.Positioner.Props["side"];
	align?: PopoverPrimitive.Positioner.Props["align"];
	sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"];
	alignOffset?: PopoverPrimitive.Positioner.Props["alignOffset"];
	tooltipStyle?: boolean;
};

function PopoverContent({
	children,
	className,
	side = "bottom",
	align = "center",
	sideOffset = 4,
	alignOffset = 0,
	tooltipStyle = false,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner
				align={align}
				alignOffset={alignOffset}
				className="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none"
				data-slot="popover-positioner"
				side={side}
				sideOffset={sideOffset}
			>
				<PopoverPrimitive.Popup
					className={cn(
						"relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-lg border bg-popover bg-clip-padding text-popover-foreground shadow-lg transition-[width,height,scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-starting-style:scale-98 data-starting-style:opacity-0 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						tooltipStyle &&
							"w-fit text-balance rounded-md text-xs shadow-black/5 shadow-md before:rounded-[calc(var(--radius-md)-1px)]",
						className,
					)}
					data-slot="popover-popup"
					{...props}
				>
					<PopoverPrimitive.Viewport
						className={cn(
							"relative size-full max-h-(--available-height) overflow-clip px-(--viewport-inline-padding) py-4 outline-none [--viewport-inline-padding:--spacing(4)] data-instant:transition-none **:data-current:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-ending-style:opacity-0 **:data-previous:data-starting-style:opacity-0 **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-current:opacity-100 **:data-previous:opacity-100 **:data-current:transition-opacity **:data-previous:transition-opacity",
							tooltipStyle
								? "py-1 [--viewport-inline-padding:calc(var(--spacing)*2)]"
								: "not-data-transitioning:overflow-y-auto",
						)}
						data-slot="popover-viewport"
					>
						{children}
					</PopoverPrimitive.Viewport>
				</PopoverPrimitive.Popup>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	);
}

type PopoverCloseProps = PopoverPrimitive.Close.Props;

function PopoverClose({ ...props }: PopoverCloseProps) {
	return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

type PopoverTitleProps = PopoverPrimitive.Title.Props;

function PopoverTitle({ className, ...props }: PopoverTitleProps) {
	return (
		<PopoverPrimitive.Title
			className={cn("font-semibold text-lg leading-none", className)}
			data-slot="popover-title"
			{...props}
		/>
	);
}

type PopoverDescriptionProps = PopoverPrimitive.Description.Props;

function PopoverDescription({ className, ...props }: PopoverDescriptionProps) {
	return (
		<PopoverPrimitive.Description
			className={cn("text-muted-foreground text-sm", className)}
			data-slot="popover-description"
			{...props}
		/>
	);
}

export {
	PopoverCreateHandle,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
	type PopoverTriggerProps,
	type PopoverContentProps,
	type PopoverCloseProps,
	type PopoverTitleProps,
	type PopoverDescriptionProps,
};
