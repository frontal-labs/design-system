import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

function Label({ className, ...props }: ComponentProps<"label">) {
	return (
		<label
			className={cn("inline-flex items-center gap-2 text-sm/4", className)}
			data-slot="label"
			{...props}
		/>
	);
}

export { Label };
