"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { cn } from "@frontal/shared";

const PreviewCard = PreviewCardPrimitive.Root;

type PreviewCardTriggerProps = PreviewCardPrimitive.Trigger.Props & {
	asChild?: boolean;
};

function PreviewCardTrigger({
	asChild,
	children,
	...props
}: PreviewCardTriggerProps) {
	if (asChild) {
		return (
			<PreviewCardPrimitive.Trigger
				data-slot="preview-card-trigger"
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}
	return (
		<PreviewCardPrimitive.Trigger data-slot="preview-card-trigger" {...props}>
			{children}
		</PreviewCardPrimitive.Trigger>
	);
}

type PreviewCardContentProps = PreviewCardPrimitive.Popup.Props & {
	align?: PreviewCardPrimitive.Positioner.Props["align"];
	sideOffset?: PreviewCardPrimitive.Positioner.Props["sideOffset"];
};

function PreviewCardContent({
	className,
	children,
	align = "center",
	sideOffset = 4,
	...props
}: PreviewCardContentProps) {
	return (
		<PreviewCardPrimitive.Portal>
			<PreviewCardPrimitive.Positioner
				align={align}
				className="z-50"
				data-slot="preview-card-positioner"
				sideOffset={sideOffset}
			>
				<PreviewCardPrimitive.Popup
					className={cn(
						"relative flex w-64 origin-(--transform-origin) text-balance rounded-lg border bg-popover bg-clip-padding p-4 text-popover-foreground text-sm shadow-lg transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
						className,
					)}
					data-slot="preview-card-content"
					{...props}
				>
					{children}
				</PreviewCardPrimitive.Popup>
			</PreviewCardPrimitive.Positioner>
		</PreviewCardPrimitive.Portal>
	);
}

export {
	PreviewCard,
	PreviewCard as HoverCard,
	PreviewCardTrigger,
	PreviewCardTrigger as HoverCardTrigger,
	PreviewCardContent,
	PreviewCardContent as HoverCardContent,
	type PreviewCardTriggerProps,
	type PreviewCardContentProps,
};
