import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

function InlineCode({ className, ...props }: ComponentProps<"code">) {
	return (
		<code
			data-slot="inline-code"
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-copy-14 font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function Code({ className, ...props }: ComponentProps<"pre">) {
	return (
		<pre
			data-slot="code"
			className={cn(
				"overflow-x-auto rounded-lg bg-muted p-4 font-mono text-copy-14",
				className,
			)}
			{...props}
		/>
	);
}

function CodeBlock({ className, ...props }: ComponentProps<"pre">) {
	return (
		<pre
			data-slot="code-block"
			className={cn(
				"overflow-x-auto rounded-lg bg-muted p-4 font-mono text-copy-14",
				className,
			)}
			{...props}
		/>
	);
}

export { InlineCode, Code, CodeBlock };
