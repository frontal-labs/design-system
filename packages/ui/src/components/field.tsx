"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import React from "react";
import { cn } from "../utils";

type FieldProps = FieldPrimitive.Root.Props;

function Field({ className, ...props }: FieldProps) {
	return (
		<FieldPrimitive.Root
			className={cn("flex flex-col items-start gap-2", className)}
			data-slot="field"
			{...props}
		/>
	);
}

type FieldLabelProps = FieldPrimitive.Label.Props;

function FieldLabel({ className, ...props }: FieldLabelProps) {
	return (
		<FieldPrimitive.Label
			className={cn(
				"inline-flex items-center gap-2 font-medium text-base/4.5 sm:text-sm/4",
				className,
			)}
			data-slot="field-label"
			{...props}
		/>
	);
}

type FieldDescriptionProps = FieldPrimitive.Description.Props;

function FieldDescription({ className, ...props }: FieldDescriptionProps) {
	return (
		<FieldPrimitive.Description
			className={cn("text-muted-foreground text-xs", className)}
			data-slot="field-description"
			{...props}
		/>
	);
}

type FieldErrorProps = FieldPrimitive.Error.Props;

function FieldError({ className, ...props }: FieldErrorProps) {
	return (
		<FieldPrimitive.Error
			className={cn("text-destructive-foreground text-xs", className)}
			data-slot="field-error"
			{...props}
		/>
	);
}

function FieldControl({ children, ...props }: FieldPrimitive.Control.Props) {
	if (React.isValidElement(children)) {
		return (
			<FieldPrimitive.Control
				render={children as React.ReactElement}
				{...props}
			/>
		);
	}

	return <FieldPrimitive.Control {...props}>{children}</FieldPrimitive.Control>;
}
const FieldValidity = FieldPrimitive.Validity;

export {
	Field,
	FieldLabel,
	FieldDescription,
	FieldError,
	FieldControl,
	FieldValidity,
	type FieldProps,
	type FieldLabelProps,
	type FieldDescriptionProps,
	type FieldErrorProps,
};
