"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { CloseIcon } from "@frontal-ds/icons";
import type { ComponentProps } from "react";
import { cn } from "../utils";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

const Dialog = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

type DialogTriggerProps = DialogPrimitive.Trigger.Props & {
  asChild?: boolean;
};

function DialogTrigger({ asChild, children, ...props }: DialogTriggerProps) {
  if (asChild) {
    return (
      <DialogPrimitive.Trigger
        data-slot="dialog-trigger"
        render={children as React.ReactElement}
        {...props}
      />
    );
  }
  return (
    <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
}

type DialogCloseProps = DialogPrimitive.Close.Props & {
  asChild?: boolean;
};

function DialogClose({ asChild, children, ...props }: DialogCloseProps) {
  if (asChild) {
    return (
      <DialogPrimitive.Close
        data-slot="dialog-close"
        render={children as React.ReactElement}
        {...props}
      />
    );
  }
  return (
    <DialogPrimitive.Close data-slot="dialog-close" {...props}>
      {children}
    </DialogPrimitive.Close>
  );
}

type DialogBackdropProps = DialogPrimitive.Backdrop.Props;

function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      data-slot="dialog-backdrop"
      {...props}
    />
  );
}

type DialogViewportProps = DialogPrimitive.Viewport.Props;

function DialogViewport({ className, ...props }: DialogViewportProps) {
  return (
    <DialogPrimitive.Viewport
      className={cn(
        "fixed inset-0 z-50 grid grid-rows-[1fr_auto_3fr] justify-items-center p-4",
        className
      )}
      data-slot="dialog-viewport"
      {...props}
    />
  );
}

type DialogPopupProps = DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  bottomStickOnMobile?: boolean;
};

function DialogPopup({
  className,
  children,
  showCloseButton = true,
  bottomStickOnMobile = true,
  ...props
}: DialogPopupProps) {
  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogViewport
        className={cn(
          bottomStickOnMobile && "max-sm:grid-rows-[1fr_auto] max-sm:pt-12"
        )}
      >
        <DialogPrimitive.Popup
          className={cn(
            "-translate-y-[calc(1.25rem*var(--nested-dialogs))] relative row-start-2 flex max-h-full min-h-0 w-full min-w-0 max-w-lg scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-2xl border bg-popover bg-clip-padding text-popover-foreground opacity-[calc(1-0.1*var(--nested-dialogs))] shadow-lg transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]",
            bottomStickOnMobile &&
              "max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none",
            className
          )}
          data-slot="dialog-popup"
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              aria-label="Close"
              className="absolute end-2 top-2"
              render={<Button size="icon" variant="ghost" />}
            >
              <CloseIcon />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

type DialogHeaderProps = ComponentProps<"div">;

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-panel])]:pb-3 max-sm:pb-4",
        className
      )}
      data-slot="dialog-header"
      {...props}
    />
  );
}

type DialogFooterProps = ComponentProps<"div"> & {
  variant?: "default" | "bare";
};

function DialogFooter({
  className,
  variant = "default",
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
        variant === "default" && "border-t bg-muted/50 py-4",
        variant === "bare" &&
          "in-[[data-slot=dialog-popup]:has([data-slot=dialog-panel])]:pt-3 pt-4 pb-6",
        className
      )}
      data-slot="dialog-footer"
      {...props}
    />
  );
}

type DialogTitleProps = DialogPrimitive.Title.Props;

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={cn("font-heading text-xl leading-none", className)}
      data-slot="dialog-title"
      {...props}
    />
  );
}

type DialogDescriptionProps = DialogPrimitive.Description.Props;

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="dialog-description"
      {...props}
    />
  );
}

type DialogPanelProps = ComponentProps<"div">;

function DialogPanel({ className, ...props }: DialogPanelProps) {
  return (
    <ScrollArea>
      <div
        className={cn(
          "px-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-header])]:pt-1 in-[[data-slot=dialog-popup]:not(:has([data-slot=dialog-header]))]:pt-6 in-[[data-slot=dialog-popup]:not(:has([data-slot=dialog-footer]))]:pb-6! in-[[data-slot=dialog-popup]:not(:has([data-slot=dialog-footer].border-t))]:pb-1 pb-6",
          className
        )}
        data-slot="dialog-panel"
        {...props}
      />
    </ScrollArea>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogBackdrop,
  DialogBackdrop as DialogOverlay,
  DialogPopup,
  DialogPopup as DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogPanel,
  DialogViewport,
  type DialogTriggerProps,
  type DialogCloseProps,
  type DialogBackdropProps,
  type DialogViewportProps,
  type DialogPopupProps,
  type DialogHeaderProps,
  type DialogFooterProps,
  type DialogTitleProps,
  type DialogDescriptionProps,
  type DialogPanelProps,
};
