import { LoaderIcon } from "@frontal-labs/icons";
import type { ComponentProps } from "react";
import { cn } from "../utils";

type SpinnerProps = ComponentProps<typeof LoaderIcon>;

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <LoaderIcon
      aria-label="Loading"
      className={cn("animate-spin", className)}
      role="status"
      {...props}
    />
  );
}

export { Spinner, type SpinnerProps };
