import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

type TableProps = ComponentProps<"table">;

function Table({ className, ...props }: TableProps) {
	return (
		<div
			className="relative w-full overflow-x-auto"
			data-slot="table-container"
		>
			<table
				className={cn(
					"w-full caption-bottom in-data-[slot=frame]:border-separate in-data-[slot=frame]:border-spacing-0 text-sm",
					className,
				)}
				data-slot="table"
				{...props}
			/>
		</div>
	);
}

type TableHeaderProps = ComponentProps<"thead">;

function TableHeader({ className, ...props }: TableHeaderProps) {
	return (
		<thead
			className={cn(
				"[&_tr]:border-b in-data-[slot=frame]:**:[th]:h-9 in-data-[slot=frame]:*:[tr]:border-none in-data-[slot=frame]:*:[tr]:hover:bg-transparent",
				className,
			)}
			data-slot="table-header"
			{...props}
		/>
	);
}

type TableBodyProps = ComponentProps<"tbody">;

function TableBody({ className, ...props }: TableBodyProps) {
	return (
		<tbody
			className={cn(
				"relative in-data-[slot=frame]:rounded-xl in-data-[slot=frame]:shadow-xs before:pointer-events-none before:absolute before:inset-px not-in-data-[slot=frame]:before:hidden before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)] [&_tr:last-child]:border-0 in-data-[slot=frame]:*:[tr]:border-0 in-data-[slot=frame]:*:[tr]:*:[td]:border-b in-data-[slot=frame]:*:[tr]:*:[td]:bg-background in-data-[slot=frame]:*:[tr]:*:[td]:bg-clip-padding in-data-[slot=frame]:*:[tr]:first:*:[td]:first:rounded-ss-xl in-data-[slot=frame]:*:[tr]:*:[td]:first:border-s in-data-[slot=frame]:*:[tr]:first:*:[td]:border-t in-data-[slot=frame]:*:[tr]:last:*:[td]:last:rounded-ee-xl in-data-[slot=frame]:*:[tr]:*:[td]:last:border-e in-data-[slot=frame]:*:[tr]:first:*:[td]:last:rounded-se-xl in-data-[slot=frame]:*:[tr]:last:*:[td]:first:rounded-es-xl in-data-[slot=frame]:*:[tr]:hover:*:[td]:bg-transparent in-data-[slot=frame]:*:[tr]:data-[state=selected]:*:[td]:bg-muted/50",
				className,
			)}
			data-slot="table-body"
			{...props}
		/>
	);
}

type TableFooterProps = ComponentProps<"tfoot">;

function TableFooter({ className, ...props }: TableFooterProps) {
	return (
		<tfoot
			className={cn(
				"border-t in-data-[slot=frame]:border-none bg-muted/50 in-data-[slot=frame]:bg-transparent font-medium [&>tr]:last:border-b-0 in-data-[slot=frame]:*:[tr]:hover:bg-transparent",
				className,
			)}
			data-slot="table-footer"
			{...props}
		/>
	);
}

type TableRowProps = ComponentProps<"tr">;

function TableRow({ className, ...props }: TableRowProps) {
	return (
		<tr
			className={cn(
				"border-b transition-colors hover:bg-muted/50 in-data-[slot=frame]:hover:bg-transparent data-[state=selected]:bg-muted/50 in-data-[slot=frame]:data-[state=selected]:bg-transparent",
				className,
			)}
			data-slot="table-row"
			{...props}
		/>
	);
}

type TableHeadProps = ComponentProps<"th">;

function TableHead({ className, ...props }: TableHeadProps) {
	return (
		<th
			className={cn(
				"h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-muted-foreground has-[[role=checkbox]]:w-px has-[[role=checkbox]]:pe-0 *:[[role=checkbox]]:translate-y-0.5",
				className,
			)}
			data-slot="table-head"
			{...props}
		/>
	);
}

type TableCellProps = ComponentProps<"td">;

function TableCell({ className, ...props }: TableCellProps) {
	return (
		<td
			className={cn(
				"whitespace-nowrap p-2 align-middle has-[[role=checkbox]]:pe-0 *:[[role=checkbox]]:translate-y-0.5",
				className,
			)}
			data-slot="table-cell"
			{...props}
		/>
	);
}

type TableCaptionProps = ComponentProps<"caption">;

function TableCaption({ className, ...props }: TableCaptionProps) {
	return (
		<caption
			className={cn(
				"in-data-[slot=frame]:my-4 mt-4 text-muted-foreground text-sm",
				className,
			)}
			data-slot="table-caption"
			{...props}
		/>
	);
}

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
	type TableProps,
	type TableHeaderProps,
	type TableBodyProps,
	type TableFooterProps,
	type TableRowProps,
	type TableHeadProps,
	type TableCellProps,
	type TableCaptionProps,
};
