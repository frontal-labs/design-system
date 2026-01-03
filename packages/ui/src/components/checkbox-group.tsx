"use client";

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { cn } from "../utils";

type CheckboxGroupProps = CheckboxGroupPrimitive.Props;

function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
	return (
		<CheckboxGroupPrimitive
			className={cn("flex flex-col items-start gap-3", className)}
			{...props}
		/>
	);
}

export { CheckboxGroup, type CheckboxGroupProps };
