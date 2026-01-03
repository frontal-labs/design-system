import { LoaderIcon } from "@frontal/icons";
import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

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
