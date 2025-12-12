"use client";

import { CheckboxGroupPrimitive } from "@frontal/primitives";
import { cn } from "@frontal/shared";

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
	return (
		<CheckboxGroupPrimitive
			className={cn("flex flex-col items-start gap-3", className)}
			{...props}
		/>
	);
}

export { CheckboxGroup };
