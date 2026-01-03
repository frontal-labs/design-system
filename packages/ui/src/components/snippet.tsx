"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ClipboardIcon } from "@frontal/icons";
import { cn } from "@frontal/shared";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";

const snippetVariants = cva(
	"relative inline-flex items-center gap-2 rounded-md border bg-muted font-mono text-sm",
	{
		defaultVariants: {
			variant: "default",
			size: "default",
		},
		variants: {
			variant: {
				default: "border-border",
			},
			size: {
				default: "px-3 py-1.5",
				sm: "px-2 py-1 text-xs",
				lg: "px-4 py-2",
			},
		},
	},
);

const snippetBlockVariants = cva(
	"relative flex w-full items-center gap-3 rounded-lg border bg-muted font-mono text-sm",
	{
		defaultVariants: {
			variant: "default",
			size: "default",
		},
		variants: {
			variant: {
				default: "border-border",
			},
			size: {
				default: "px-4 py-3",
				sm: "px-3 py-2 text-xs",
				lg: "px-5 py-4",
			},
		},
	},
);

type SnippetProps = Omit<useRender.ComponentProps<"div">, "children"> & {
	text: string;
	inline?: boolean;
	copyable?: boolean;
	prompt?: string;
	variant?: VariantProps<typeof snippetVariants>["variant"];
	size?: VariantProps<typeof snippetVariants>["size"];
};

function Snippet({
	className,
	variant,
	size,
	text,
	inline = false,
	copyable = true,
	prompt,
	render,
	...props
}: SnippetProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (_error) {
			// Fallback for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed";
			textArea.style.opacity = "0";
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand("copy");
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			} catch (_err) {
				// Copy failed
			}
			document.body.removeChild(textArea);
		}
	};

	const variants = inline ? snippetVariants : snippetBlockVariants;

	const defaultProps = {
		className: cn(variants({ variant, size }), className),
		"data-slot": "snippet",
		"data-inline": inline,
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render:
			render ||
			((defaultProps) => (
				<div {...defaultProps}>
					<code
						className="flex-1 select-all text-foreground"
						data-slot="snippet-text"
					>
						{prompt && (
							<span
								className="text-muted-foreground"
								data-slot="snippet-prompt"
							>
								{prompt}{" "}
							</span>
						)}
						{text}
					</code>
					{copyable && (
						<button
							type="button"
							onClick={handleCopy}
							aria-label={copied ? "Copied" : "Copy snippet"}
							className={cn(
								"inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
								inline ? "size-5" : "size-7",
							)}
							data-slot="snippet-copy"
						>
							<ClipboardIcon
								className={cn(
									"transition-opacity",
									inline ? "size-3" : "size-3.5",
									copied && "opacity-50",
								)}
							/>
						</button>
					)}
				</div>
			)),
	});
}

export { Snippet, snippetVariants, snippetBlockVariants, type SnippetProps };
