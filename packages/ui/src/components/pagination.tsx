import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import {
	ArrowLeftChevronIcon,
	ArrowRightChevronIcon,
	MoreIcon,
} from "@frontal/icons";
import type { ComponentProps } from "react";
import { cn } from "../utils";
import { type Button, buttonVariants } from "./button";

type PaginationProps = ComponentProps<"nav">;

function Pagination({ className, ...props }: PaginationProps) {
	return (
		<nav
			aria-label="pagination"
			className={cn("mx-auto flex w-full justify-center", className)}
			data-slot="pagination"
			{...props}
		/>
	);
}

type PaginationContentProps = ComponentProps<"ul">;

function PaginationContent({ className, ...props }: PaginationContentProps) {
	return (
		<ul
			className={cn("flex flex-row items-center gap-1", className)}
			data-slot="pagination-content"
			{...props}
		/>
	);
}

type PaginationItemProps = ComponentProps<"li">;

function PaginationItem({ ...props }: PaginationItemProps) {
	return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
	isActive?: boolean;
	size?: ComponentProps<typeof Button>["size"];
} & useRender.ComponentProps<"a">;

function PaginationLink({
	className,
	isActive,
	size = "icon",
	render,
	...props
}: PaginationLinkProps) {
	const defaultProps = {
		"aria-current": isActive ? ("page" as const) : undefined,
		className: render
			? className
			: cn(
					buttonVariants({
						size,
						variant: isActive ? "outline" : "ghost",
					}),
					className,
				),
		"data-active": isActive,
		"data-slot": "pagination-link",
	};

	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(defaultProps, props),
		render,
	});
}

type PaginationPreviousProps = ComponentProps<typeof PaginationLink>;

function PaginationPrevious({ className, ...props }: PaginationPreviousProps) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			className={cn("max-sm:aspect-square max-sm:p-0", className)}
			size="medium"
			{...props}
		>
			<ArrowLeftChevronIcon className="sm:-ms-1" />
			<span className="max-sm:hidden">Previous</span>
		</PaginationLink>
	);
}

type PaginationNextProps = ComponentProps<typeof PaginationLink>;

function PaginationNext({ className, ...props }: PaginationNextProps) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			className={cn("max-sm:aspect-square max-sm:p-0", className)}
			size="medium"
			{...props}
		>
			<span className="max-sm:hidden">Next</span>
			<ArrowRightChevronIcon className="sm:-me-1" />
		</PaginationLink>
	);
}

type PaginationEllipsisProps = ComponentProps<"span">;

function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps) {
	return (
		<span
			aria-hidden
			className={cn("flex min-w-7 justify-center", className)}
			data-slot="pagination-ellipsis"
			{...props}
		>
			<MoreIcon className="size-5 sm:size-4" />
			<span className="sr-only">More pages</span>
		</span>
	);
}

export {
	Pagination,
	PaginationContent,
	PaginationLink,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationEllipsis,
	type PaginationProps,
	type PaginationContentProps,
	type PaginationItemProps,
	type PaginationLinkProps,
	type PaginationPreviousProps,
	type PaginationNextProps,
	type PaginationEllipsisProps,
};
