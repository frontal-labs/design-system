import { Loader2Icon } from "@frontal/icons";
import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

function Spinner({ className, ...props }: ComponentProps<"svg">) {
	return (
		<Loader2Icon
			aria-label="Loading"
			className={cn("size-4 animate-spin", className)}
			role="status"
			{...props}
		/>
	);
}

export { Spinner };
