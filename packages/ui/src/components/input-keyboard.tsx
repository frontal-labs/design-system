import { cn } from "../utils";
import type { ComponentProps } from "react";

type InputKeyboardProps = ComponentProps<"kbd">;

function InputKeyboard({ className, ...props }: InputKeyboardProps) {
	return (
		<kbd
			className={cn(
				"pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded bg-muted px-1 font-medium font-sans text-muted-foreground text-xs [&_svg:not([class*='size-'])]:size-3",
				className,
			)}
			data-slot="kbd"
			{...props}
		/>
	);
}

type InputKeyboardGroupProps = ComponentProps<"kbd">;

function InputKeyboardGroup({ className, ...props }: InputKeyboardGroupProps) {
	return (
		<kbd
			className={cn("inline-flex items-center gap-1", className)}
			data-slot="kbd-group"
			{...props}
		/>
	);
}

export {
	InputKeyboard,
	InputKeyboardGroup,
	type InputKeyboardProps,
	type InputKeyboardGroupProps,
};
