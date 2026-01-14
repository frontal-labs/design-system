"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { ArrowUpDownIcon, CloseIcon } from "@frontal-ds/icons";
import type { ReactNode, Ref } from "react";
import { cn } from "../utils";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";

const Autocomplete = AutocompletePrimitive.Root;

type AutocompleteInputProps = Omit<
  AutocompletePrimitive.Input.Props,
  "size"
> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: ReactNode;
  size?: "small" | "medium" | "large" | number;
  ref?: Ref<HTMLInputElement>;
};

function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size,
  children,
  ...props
}: AutocompleteInputProps) {
  const sizeValue = (size ?? "medium") as "small" | "medium" | "large" | number;

  return (
    <div className="relative w-full">
      {startAddon && (
        <div
          aria-hidden="true"
          className="[&_svg]:-mx-0.5 pointer-events-none absolute inset-y-0 start-px z-10 flex items-center ps-[calc(var(--spacing)*3-1px)] has-[+[data-size=small]]:ps-[calc(var(--spacing)*2.5-1px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4"
          data-slot="autocomplete-start-addon"
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        className={cn(
          startAddon &&
            "data-[size=small]:*:data-[slot=autocomplete-input]:ps-[calc(var(--spacing)*7.5-1px)] *:data-[slot=autocomplete-input]:ps-[calc(var(--spacing)*8.5-1px)] sm:data-[size=small]:*:data-[slot=autocomplete-input]:ps-[calc(var(--spacing)*7-1px)] sm:*:data-[slot=autocomplete-input]:ps-[calc(var(--spacing)*8-1px)]",
          sizeValue === "small"
            ? "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-6.5"
            : "has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-7",
          className
        )}
        data-slot="autocomplete-input"
        render={<Input size={sizeValue} />}
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className={cn(
            "-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            sizeValue === "small" ? "end-0" : "end-0.5"
          )}
        >
          <ArrowUpDownIcon />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
          className={cn(
            "-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            sizeValue === "small" ? "end-0" : "end-0.5"
          )}
        >
          <CloseIcon />
        </AutocompleteClear>
      )}
    </div>
  );
}

type AutocompletePopupProps = AutocompletePrimitive.Popup.Props & {
  sideOffset?: number;
};

function AutocompletePopup({
  className,
  children,
  sideOffset = 4,
  ...props
}: AutocompletePopupProps) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        className="z-50 select-none"
        data-slot="autocomplete-positioner"
        sideOffset={sideOffset}
      >
        <span
          className={cn(
            "relative flex max-h-full origin-(--transform-origin) rounded-lg border bg-popover bg-clip-padding transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-lg has-data-starting-style:scale-98 has-data-starting-style:opacity-0 dark:not-in-data-[slot=group]:bg-clip-border",
            className
          )}
        >
          <AutocompletePrimitive.Popup
            className="flex max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) flex-col"
            data-slot="autocomplete-popup"
            {...props}
          >
            {children}
          </AutocompletePrimitive.Popup>
        </span>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

type AutocompleteItemProps = AutocompletePrimitive.Item.Props;

function AutocompleteItem({
  className,
  children,
  ...props
}: AutocompleteItemProps) {
  return (
    <AutocompletePrimitive.Item
      className={cn(
        "flex min-h-8 cursor-default select-none items-center rounded-sm px-2 py-1 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm",
        className
      )}
      data-slot="autocomplete-item"
      {...props}
    >
      {children}
    </AutocompletePrimitive.Item>
  );
}

type AutocompleteSeparatorProps = AutocompletePrimitive.Separator.Props;

function AutocompleteSeparator({
  className,
  ...props
}: AutocompleteSeparatorProps) {
  return (
    <AutocompletePrimitive.Separator
      className={cn("mx-2 my-1 h-px bg-border last:hidden", className)}
      data-slot="autocomplete-separator"
      {...props}
    />
  );
}

type AutocompleteGroupProps = AutocompletePrimitive.Group.Props;

function AutocompleteGroup({ className, ...props }: AutocompleteGroupProps) {
  return (
    <AutocompletePrimitive.Group
      className={cn("[[role=group]+&]:mt-1.5", className)}
      data-slot="autocomplete-group"
      {...props}
    />
  );
}

type AutocompleteGroupLabelProps = AutocompletePrimitive.GroupLabel.Props;

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompleteGroupLabelProps) {
  return (
    <AutocompletePrimitive.GroupLabel
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs",
        className
      )}
      data-slot="autocomplete-group-label"
      {...props}
    />
  );
}

type AutocompleteEmptyProps = AutocompletePrimitive.Empty.Props;

function AutocompleteEmpty({ className, ...props }: AutocompleteEmptyProps) {
  return (
    <AutocompletePrimitive.Empty
      className={cn(
        "not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm",
        className
      )}
      data-slot="autocomplete-empty"
      {...props}
    />
  );
}

type AutocompleteRowProps = AutocompletePrimitive.Row.Props;

function AutocompleteRow({ className, ...props }: AutocompleteRowProps) {
  return (
    <AutocompletePrimitive.Row
      className={className}
      data-slot="autocomplete-row"
      {...props}
    />
  );
}

type AutocompleteValueProps = AutocompletePrimitive.Value.Props;

function AutocompleteValue({ ...props }: AutocompleteValueProps) {
  return (
    <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />
  );
}

type AutocompleteListProps = AutocompletePrimitive.List.Props;

function AutocompleteList({ className, ...props }: AutocompleteListProps) {
  return (
    <ScrollArea scrollbarGutter scrollFade>
      <AutocompletePrimitive.List
        className={cn(
          "not-empty:scroll-py-1 not-empty:p-1 in-data-has-overflow-y:pe-3",
          className
        )}
        data-slot="autocomplete-list"
        {...props}
      />
    </ScrollArea>
  );
}

type AutocompleteClearProps = AutocompletePrimitive.Clear.Props;

function AutocompleteClear({ className, ...props }: AutocompleteClearProps) {
  return (
    <AutocompletePrimitive.Clear
      className={cn(
        "-translate-y-1/2 absolute end-0.5 top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-[color,background-color,box-shadow,opacity] pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="autocomplete-clear"
      {...props}
    >
      <CloseIcon />
    </AutocompletePrimitive.Clear>
  );
}

type AutocompleteStatusProps = AutocompletePrimitive.Status.Props;

function AutocompleteStatus({ className, ...props }: AutocompleteStatusProps) {
  return (
    <AutocompletePrimitive.Status
      className={cn(
        "px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0",
        className
      )}
      data-slot="autocomplete-status"
      {...props}
    />
  );
}

type AutocompleteCollectionProps = AutocompletePrimitive.Collection.Props;

function AutocompleteCollection({ ...props }: AutocompleteCollectionProps) {
  return (
    <AutocompletePrimitive.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  );
}

type AutocompleteTriggerProps = AutocompletePrimitive.Trigger.Props;

function AutocompleteTrigger({
  className,
  ...props
}: AutocompleteTriggerProps) {
  return (
    <AutocompletePrimitive.Trigger
      className={className}
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteEmpty,
  AutocompleteValue,
  AutocompleteList,
  AutocompleteClear,
  AutocompleteStatus,
  AutocompleteRow,
  AutocompleteCollection,
  type AutocompleteInputProps,
  type AutocompletePopupProps,
  type AutocompleteItemProps,
  type AutocompleteSeparatorProps,
  type AutocompleteGroupProps,
  type AutocompleteGroupLabelProps,
  type AutocompleteEmptyProps,
  type AutocompleteRowProps,
  type AutocompleteValueProps,
  type AutocompleteListProps,
  type AutocompleteClearProps,
  type AutocompleteStatusProps,
  type AutocompleteCollectionProps,
  type AutocompleteTriggerProps,
};
