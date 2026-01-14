"use client";

import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import { cn } from "../utils";

type MeterProps = MeterPrimitive.Root.Props;

function Meter({ className, children, ...props }: MeterProps) {
  return (
    <MeterPrimitive.Root
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      )}
    </MeterPrimitive.Root>
  );
}

type MeterLabelProps = MeterPrimitive.Label.Props;

function MeterLabel({ className, ...props }: MeterLabelProps) {
  return (
    <MeterPrimitive.Label
      className={cn("font-medium text-sm", className)}
      data-slot="meter-label"
      {...props}
    />
  );
}

type MeterTrackProps = MeterPrimitive.Track.Props;

function MeterTrack({ className, ...props }: MeterTrackProps) {
  return (
    <MeterPrimitive.Track
      className={cn("block h-2 w-full overflow-hidden bg-input", className)}
      data-slot="meter-track"
      {...props}
    />
  );
}

type MeterIndicatorProps = MeterPrimitive.Indicator.Props;

function MeterIndicator({ className, ...props }: MeterIndicatorProps) {
  return (
    <MeterPrimitive.Indicator
      className={cn("bg-primary transition-all duration-500", className)}
      data-slot="meter-indicator"
      {...props}
    />
  );
}

type MeterValueProps = MeterPrimitive.Value.Props;

function MeterValue({ className, ...props }: MeterValueProps) {
  return (
    <MeterPrimitive.Value
      className={cn("text-sm tabular-nums", className)}
      data-slot="meter-value"
      {...props}
    />
  );
}

export {
  Meter,
  MeterLabel,
  MeterTrack,
  MeterIndicator,
  MeterValue,
  type MeterProps,
  type MeterLabelProps,
  type MeterTrackProps,
  type MeterIndicatorProps,
  type MeterValueProps,
};
