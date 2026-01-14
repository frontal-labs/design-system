import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const noteVariants = cva(
  "relative flex w-full items-start gap-x-2 gap-y-1 rounded-lg border px-3.5 py-3 text-sm has-[>svg]:gap-x-2 [&>svg]:mt-0.5 [&>svg]:h-lh [&>svg]:w-4 [&>svg]:shrink-0",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default:
          "border-border/64 bg-transparent dark:bg-input/32 [&>svg]:text-muted-foreground",
        info: "border-info/32 bg-info/4 [&>svg]:text-info",
        success: "border-success/32 bg-success/4 [&>svg]:text-success",
        warning: "border-warning/32 bg-warning/4 [&>svg]:text-warning",
        error:
          "border-destructive/32 bg-destructive/4 [&>svg]:text-destructive",
      },
    },
  }
);

type NoteProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof noteVariants>;

function Note({ className, variant, render, ...props }: NoteProps) {
  const defaultProps = {
    className: cn(noteVariants({ variant }), className),
    "data-slot": "note",
  };

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(defaultProps, props),
    render,
  });
}

type NoteLabelProps = useRender.ComponentProps<"div">;

function NoteLabel({ className, render, ...props }: NoteLabelProps) {
  const defaultProps = {
    className: cn("font-medium text-foreground", className),
    "data-slot": "note-label",
  };

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(defaultProps, props),
    render,
  });
}

type NoteContentProps = useRender.ComponentProps<"div">;

function NoteContent({ className, render, ...props }: NoteContentProps) {
  const defaultProps = {
    className: cn("flex-1 text-muted-foreground [svg~&]:mt-0", className),
    "data-slot": "note-content",
  };

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(defaultProps, props),
    render,
  });
}

export {
  Note,
  NoteLabel,
  NoteContent,
  noteVariants,
  type NoteProps,
  type NoteLabelProps,
  type NoteContentProps,
};
