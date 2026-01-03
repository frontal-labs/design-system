"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "../utils";

type ProgressProps = ProgressPrimitive.Root.Props;

function Progress({ className, children, ...props }: ProgressProps) {
	return (
		<ProgressPrimitive.Root
			className={cn("flex w-full flex-col gap-2", className)}
			data-slot="progress"
			{...props}
		>
			{children ? (
				children
			) : (
				<ProgressTrack>
					<ProgressIndicator />
				</ProgressTrack>
			)}
		</ProgressPrimitive.Root>
	);
}

type ProgressLabelProps = ProgressPrimitive.Label.Props;

function ProgressLabel({ className, ...props }: ProgressLabelProps) {
	return (
		<ProgressPrimitive.Label
			className={cn("font-medium text-sm", className)}
			data-slot="progress-label"
			{...props}
		/>
	);
}

type ProgressTrackProps = ProgressPrimitive.Track.Props;

function ProgressTrack({ className, ...props }: ProgressTrackProps) {
	return (
		<ProgressPrimitive.Track
			className={cn(
				"block h-1.5 w-full overflow-hidden rounded-full bg-input",
				className,
			)}
			data-slot="progress-track"
			{...props}
		/>
	);
}

type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props;

function ProgressIndicator({ className, ...props }: ProgressIndicatorProps) {
	return (
		<ProgressPrimitive.Indicator
			className={cn("bg-primary transition-all duration-500", className)}
			data-slot="progress-indicator"
			{...props}
		/>
	);
}

type ProgressValueProps = ProgressPrimitive.Value.Props;

function ProgressValue({ className, ...props }: ProgressValueProps) {
	return (
		<ProgressPrimitive.Value
			className={cn("text-sm tabular-nums", className)}
			data-slot="progress-value"
			{...props}
		/>
	);
}

export {
	Progress,
	ProgressLabel,
	ProgressTrack,
	ProgressIndicator,
	ProgressValue,
	type ProgressProps,
	type ProgressLabelProps,
	type ProgressTrackProps,
	type ProgressIndicatorProps,
	type ProgressValueProps,
};
