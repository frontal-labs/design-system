"use client";

import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import { cn } from "../utils";

type FieldsetProps = FieldsetPrimitive.Root.Props;

function Fieldset({ className, ...props }: FieldsetProps) {
  return (
    <FieldsetPrimitive.Root
      className={cn("flex w-full max-w-64 flex-col gap-6", className)}
      data-slot="fieldset"
      {...props}
    />
  );
}
type FieldsetLegendProps = FieldsetPrimitive.Legend.Props;

function FieldsetLegend({ className, ...props }: FieldsetLegendProps) {
  return (
    <FieldsetPrimitive.Legend
      className={cn("font-semibold", className)}
      data-slot="fieldset-legend"
      {...props}
    />
  );
}

export {
  Fieldset,
  FieldsetLegend,
  type FieldsetProps,
  type FieldsetLegendProps,
};
