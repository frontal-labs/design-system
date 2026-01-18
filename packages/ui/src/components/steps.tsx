"use client";

import { CheckIcon } from "@frontal-labs/icons";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../utils";

const stepsVariants = cva("flex", {
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "flex-row items-center",
      vertical: "flex-col",
    },
  },
});

type StepsProps = ComponentProps<"ol"> & VariantProps<typeof stepsVariants>;

function Steps({
  className,
  orientation = "horizontal",
  ...props
}: StepsProps) {
  return (
    <ol
      className={cn(stepsVariants({ orientation }), className)}
      data-slot="steps"
      {...props}
    />
  );
}

const stepItemVariants = cva("flex items-center", {
  defaultVariants: {
    orientation: "horizontal",
    state: "pending",
  },
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    state: {
      pending: "",
      active: "",
      completed: "",
    },
  },
});

type StepItemProps = ComponentProps<"li"> &
  VariantProps<typeof stepItemVariants> & {
    state?: "pending" | "active" | "completed";
  };

function StepItem({
  className,
  orientation = "horizontal",
  state = "pending",
  ...props
}: StepItemProps) {
  return (
    <li
      className={cn(stepItemVariants({ orientation, state }), className)}
      data-slot="step-item"
      data-state={state}
      {...props}
    />
  );
}

type StepIndicatorProps = ComponentProps<"div"> & {
  state?: "pending" | "active" | "completed";
  number?: number;
};

function StepIndicator({
  className,
  state = "pending",
  number,
  ...props
}: StepIndicatorProps) {
  return (
    <div
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full border-2 font-medium text-sm transition-colors sm:size-7 sm:text-xs",
        state === "pending" &&
          "border-muted-foreground/32 bg-background text-muted-foreground",
        state === "active" &&
          "border-primary bg-primary text-primary-foreground",
        state === "completed" &&
          "border-primary bg-primary text-primary-foreground",
        className
      )}
      data-slot="step-indicator"
      data-state={state}
      {...props}
    >
      {state === "completed" ? (
        <CheckIcon className="size-4" />
      ) : (
        number !== undefined && <span>{number}</span>
      )}
    </div>
  );
}

type StepContentProps = ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};

function StepContent({
  className,
  orientation = "horizontal",
  ...props
}: StepContentProps) {
  return (
    <div
      className={cn(
        orientation === "horizontal" ? "ms-3" : "mt-2 text-center",
        className
      )}
      data-slot="step-content"
      {...props}
    />
  );
}

type StepTitleProps = ComponentProps<"div">;

function StepTitle({ className, ...props }: StepTitleProps) {
  return (
    <div
      className={cn("font-medium text-sm", className)}
      data-slot="step-title"
      {...props}
    />
  );
}

type StepDescriptionProps = ComponentProps<"div">;

function StepDescription({ className, ...props }: StepDescriptionProps) {
  return (
    <div
      className={cn("mt-0.5 text-muted-foreground text-xs", className)}
      data-slot="step-description"
      {...props}
    />
  );
}

type StepConnectorProps = ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
  state?: "pending" | "active" | "completed";
};

function StepConnector({
  className,
  orientation = "horizontal",
  state = "pending",
  ...props
}: StepConnectorProps) {
  return (
    <div
      className={cn(
        "shrink-0 transition-colors",
        orientation === "horizontal" ? "mx-2 h-px w-8" : "my-2 h-8 w-px",
        state === "completed" ? "bg-primary" : "bg-muted-foreground/32",
        className
      )}
      data-slot="step-connector"
      data-state={state}
      {...props}
    />
  );
}

export {
  Steps,
  StepItem,
  StepIndicator,
  StepContent,
  StepTitle,
  StepDescription,
  StepConnector,
  type StepsProps,
  type StepItemProps,
  type StepIndicatorProps,
  type StepContentProps,
  type StepTitleProps,
  type StepDescriptionProps,
  type StepConnectorProps,
};
