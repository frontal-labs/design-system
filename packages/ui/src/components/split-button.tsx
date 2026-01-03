"use client";

import { ArrowDownChevronIcon } from "@frontal/icons";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";
import { Button, type ButtonProps } from "./button";
import { Menu, MenuGroup, MenuItem, MenuPopup, MenuTrigger } from "./menu";

type SplitButtonProps = ComponentProps<"div"> & {
	primaryAction: {
		label: ReactNode;
		onClick: () => void;
	};
	secondaryActions?: Array<{
		label: ReactNode;
		onClick: () => void;
		variant?: "default" | "destructive";
	}>;
	buttonProps?: Omit<ButtonProps, "onClick" | "children">;
};

function SplitButton({
	className,
	primaryAction,
	secondaryActions = [],
	buttonProps,
	...props
}: SplitButtonProps) {
	const hasSecondaryActions = secondaryActions.length > 0;

	if (!hasSecondaryActions) {
		return (
			<Button onClick={primaryAction.onClick} {...buttonProps}>
				{primaryAction.label}
			</Button>
		);
	}

	return (
		<div
			className={cn("inline-flex", className)}
			data-slot="split-button"
			{...props}
		>
			<Button
				onClick={primaryAction.onClick}
				className={cn("rounded-r-none border-r-0", buttonProps?.className)}
				{...buttonProps}
			>
				{primaryAction.label}
			</Button>
			<Menu>
				<MenuTrigger>
					<Button
						variant={buttonProps?.variant || "primary"}
						size={buttonProps?.size || "medium"}
						className={cn("rounded-l-none px-2", buttonProps?.className)}
						aria-label="More options"
					>
						<ArrowDownChevronIcon className="size-4" />
					</Button>
				</MenuTrigger>
				<MenuPopup align="end">
					<MenuGroup>
						{secondaryActions.map((action, index) => (
							<MenuItem
								key={`${String(action.label)}-${index}`}
								onClick={action.onClick}
								variant={action.variant}
							>
								{action.label}
							</MenuItem>
						))}
					</MenuGroup>
				</MenuPopup>
			</Menu>
		</div>
	);
}

export { SplitButton, type SplitButtonProps };
