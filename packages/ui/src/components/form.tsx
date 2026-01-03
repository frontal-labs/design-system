"use client";

import { Form as FormPrimitive } from "@base-ui/react/form";
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	useFormContext,
} from "react-hook-form";
import { cn } from "../utils";

type FormProps = FormPrimitive.Props;

function Form({ className, ...props }: FormProps) {
	return (
		<FormPrimitive
			className={cn("flex w-full flex-col gap-4", className)}
			data-slot="form"
			{...props}
		/>
	);
}

type FormFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>;

function FormField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormFieldProps<TFieldValues, TName>) {
	return <Controller {...props} />;
}

export {
	Form,
	type FormProps,
	FormField,
	type FormFieldProps,
	FormProvider,
	useFormContext,
};
