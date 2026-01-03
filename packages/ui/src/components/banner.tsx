"use client";

import { CloseIcon } from "@frontal/icons";
import { cn } from "../utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useState } from "react";
import { Button } from "./button";

const bannerVariants = cva(
	"relative grid w-full items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-card-foreground text-sm has-[>svg]:has-data-[slot=banner-action]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-data-[slot=banner-action]:grid-cols-[1fr_auto] has-[>svg]:gap-x-2 [&>svg]:h-lh [&>svg]:w-4",
	{
		defaultVariants: {
			variant: "default",
		},
		variants: {
			variant: {
				default:
					"bg-transparent dark:bg-input/32 [&>svg]:text-muted-foreground",
				error:
					"border-destructive/32 bg-destructive/4 [&>svg]:text-destructive",
				info: "border-info/32 bg-info/4 [&>svg]:text-info",
				success: "border-success/32 bg-success/4 [&>svg]:text-success",
				warning: "border-warning/32 bg-warning/4 [&>svg]:text-warning",
			},
		},
	},
);

type BannerProps = ComponentProps<"div"> &
	VariantProps<typeof bannerVariants> & {
		dismissible?: boolean;
		onDismiss?: () => void;
	};

function Banner({
	className,
	variant,
	dismissible = false,
	onDismiss,
	children,
	...props
}: BannerProps) {
	const [isVisible, setIsVisible] = useState(true);

	const handleDismiss = () => {
		setIsVisible(false);
		onDismiss?.();
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={cn(bannerVariants({ variant }), className)}
			data-slot="banner"
			role="banner"
			{...props}
		>
			{children}
			{dismissible && (
				<Button
					variant="ghost"
					size="icon-xsmall"
					className="absolute top-2 right-2"
					onClick={handleDismiss}
					aria-label="Dismiss banner"
					data-slot="banner-dismiss"
				>
					<CloseIcon className="size-3.5" />
				</Button>
			)}
		</div>
	);
}

type BannerTitleProps = ComponentProps<"div">;

function BannerTitle({ className, ...props }: BannerTitleProps) {
	return (
		<div
			className={cn("font-medium [svg~&]:col-start-2", className)}
			data-slot="banner-title"
			{...props}
		/>
	);
}

type BannerDescriptionProps = ComponentProps<"div">;

function BannerDescription({ className, ...props }: BannerDescriptionProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-2.5 text-muted-foreground [svg~&]:col-start-2",
				className,
			)}
			data-slot="banner-description"
			{...props}
		/>
	);
}

type BannerActionProps = ComponentProps<"div">;

function BannerAction({ className, ...props }: BannerActionProps) {
	return (
		<div
			className={cn(
				"flex gap-1 max-sm:col-start-2 max-sm:mt-2 sm:row-start-1 sm:row-end-3 sm:self-center sm:[[data-slot=banner-description]~&]:col-start-2 sm:[[data-slot=banner-title]~&]:col-start-2 sm:[svg~&]:col-start-2 sm:[svg~[data-slot=banner-description]~&]:col-start-3 sm:[svg~[data-slot=banner-title]~&]:col-start-3",
				className,
			)}
			data-slot="banner-action"
			{...props}
		/>
	);
}

export {
	Banner,
	BannerTitle,
	BannerDescription,
	BannerAction,
	type BannerProps,
	type BannerTitleProps,
	type BannerDescriptionProps,
	type BannerActionProps,
};
