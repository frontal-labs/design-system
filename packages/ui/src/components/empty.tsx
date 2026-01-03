import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../utils";

type EmptyProps = ComponentProps<"div">;

function Empty({ className, ...props }: EmptyProps) {
	return (
		<div
			className={cn(
				"flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-xl border-dashed p-6 text-center md:p-12",
				className,
			)}
			data-slot="empty"
			{...props}
		/>
	);
}

type EmptyHeaderProps = ComponentProps<"div">;

function EmptyHeader({ className, ...props }: EmptyHeaderProps) {
	return (
		<div
			className={cn(
				"flex max-w-sm flex-col items-center text-center",
				className,
			)}
			data-slot="empty-header"
			{...props}
		/>
	);
}

const emptyMediaVariants = cva(
	"flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		defaultVariants: {
			variant: "default",
		},
		variants: {
			variant: {
				default: "bg-transparent",
				icon: "relative flex size-9 shrink-0 items-center justify-center rounded-md border bg-card text-foreground shadow-black/5 shadow-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/8%)] [&_svg:not([class*='size-'])]:size-4.5",
			},
		},
	},
);

type EmptyMediaProps = ComponentProps<"div"> &
	VariantProps<typeof emptyMediaVariants>;

function EmptyMedia({
	className,
	variant = "default",
	...props
}: EmptyMediaProps) {
	return (
		<div
			className={cn("relative mb-6", className)}
			data-slot="empty-media"
			data-variant={variant}
			{...props}
		>
			{variant === "icon" && (
				<>
					<div
						aria-hidden="true"
						className={cn(
							emptyMediaVariants({ className, variant }),
							"-translate-x-0.5 -rotate-10 pointer-events-none absolute bottom-px origin-bottom-left scale-84 shadow-none",
						)}
					/>
					<div
						aria-hidden="true"
						className={cn(
							emptyMediaVariants({ className, variant }),
							"pointer-events-none absolute bottom-px origin-bottom-right translate-x-0.5 rotate-10 scale-84 shadow-none",
						)}
					/>
				</>
			)}
			<div
				className={cn(emptyMediaVariants({ className, variant }))}
				{...props}
			/>
		</div>
	);
}

type EmptyTitleProps = ComponentProps<"div">;

function EmptyTitle({ className, ...props }: EmptyTitleProps) {
	return (
		<div
			className={cn("font-heading text-xl leading-none", className)}
			data-slot="empty-title"
			{...props}
		/>
	);
}

type EmptyDescriptionProps = ComponentProps<"p">;

function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
	return (
		<div
			className={cn(
				"text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4 [[data-slot=empty-title]+&]:mt-1",
				className,
			)}
			data-slot="empty-description"
			{...props}
		/>
	);
}

type EmptyContentProps = ComponentProps<"div">;

function EmptyContent({ className, ...props }: EmptyContentProps) {
	return (
		<div
			className={cn(
				"flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
				className,
			)}
			data-slot="empty-content"
			{...props}
		/>
	);
}

export {
	Empty,
	EmptyHeader,
	EmptyTitle,
	EmptyDescription,
	EmptyContent,
	EmptyMedia,
	type EmptyProps,
	type EmptyHeaderProps,
	type EmptyTitleProps,
	type EmptyDescriptionProps,
	type EmptyContentProps,
	type EmptyMediaProps,
};
