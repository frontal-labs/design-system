"use client";

import { FormPrimitive } from "@frontal/primitives";
import { cn } from "@frontal/shared";

function Form({ className, ...props }: FormPrimitive.Props) {
	return (
		<FormPrimitive
			className={cn("flex w-full flex-col gap-4", className)}
			data-slot="form"
			{...props}
		/>
	);
}

export { Form };
