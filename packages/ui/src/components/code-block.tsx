"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ClipboardIcon } from "@frontal/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { cn } from "../utils";

const codeBlockVariants = cva(
	"relative w-full overflow-hidden rounded-lg border bg-muted font-mono text-sm",
	{
		defaultVariants: {
			variant: "default",
		},
		variants: {
			variant: {
				default: "border-border",
			},
		},
	},
);

type CodeBlockProps = Omit<useRender.ComponentProps<"div">, "children"> &
	VariantProps<typeof codeBlockVariants> & {
		code: string;
		language?: string;
		copyable?: boolean;
		showLineNumbers?: boolean;
	};

function CodeBlock({
	className,
	variant,
	code,
	language,
	copyable = true,
	showLineNumbers = false,
	render,
	...props
}: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (_error) {
			// Fallback for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = code;
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

	const defaultProps = {
		className: cn(codeBlockVariants({ variant }), className),
		"data-slot": "code-block",
		"data-language": language,
	};

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(defaultProps, props),
		render:
			render ||
			((defaultProps) => (
				<div {...defaultProps}>
					{copyable && (
						<div className="absolute top-2 right-2 z-10">
							<button
								type="button"
								onClick={handleCopy}
								aria-label={copied ? "Copied" : "Copy code"}
								className={cn(
									"inline-flex size-7 items-center justify-center rounded-md border border-transparent bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
								)}
							>
								<ClipboardIcon
									className={cn(
										"size-3.5 transition-opacity",
										copied && "opacity-50",
									)}
								/>
							</button>
						</div>
					)}
					<CodeBlockContent
						code={code}
						showLineNumbers={showLineNumbers}
						language={language}
					/>
				</div>
			)),
	});
}

type CodeBlockContentProps = {
	code: string;
	showLineNumbers?: boolean;
	language?: string;
};

function CodeBlockContent({
	code,
	showLineNumbers,
	language,
}: CodeBlockContentProps) {
	const lines = code.split("\n");
	const lineCount = lines.length;

	return (
		<pre
			className="overflow-x-auto p-4 text-foreground"
			data-slot="code-block-content"
		>
			<code
				className="block"
				data-language={language}
				data-slot="code-block-code"
			>
				{showLineNumbers ? (
					<span className="flex">
						<span
							className="mr-4 select-none text-muted-foreground"
							aria-hidden="true"
							data-slot="code-block-line-numbers"
						>
							{lines.map((_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: Static code lines array, order never changes
								<span key={`line-number-${index}`} className="block">
									{String(index + 1).padStart(String(lineCount).length, " ")}
								</span>
							))}
						</span>
						<span className="flex-1">
							{lines.map((line, index) => (
								<span
									key={`line-content-${index}-${line?.slice(0, 20) || ""}-${line?.length || 0}`}
									className="block"
								>
									{line || "\u00A0"}
								</span>
							))}
						</span>
					</span>
				) : (
					code
				)}
			</code>
		</pre>
	);
}

export { CodeBlock, codeBlockVariants, type CodeBlockProps };
