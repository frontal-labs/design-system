import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

function Blockquote({ className, ...props }: ComponentProps<"blockquote">) {
	return (
		<blockquote
			data-slot="blockquote"
			className={cn(
				"border-l-4 border-border pl-4 italic text-copy-18 text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

export { Blockquote };
