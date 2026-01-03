"use client";

import { CalendarIcon } from "@frontal/icons";
import { type ComponentProps, useState } from "react";
import { cn } from "../utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerProps = ComponentProps<"div"> & {
	date?: Date;
	onDateChange?: (date: Date | undefined) => void;
	placeholder?: string;
	disabled?: boolean;
	fromDate?: Date;
	toDate?: Date;
	captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
};

function formatDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function DatePicker({
	className,
	date,
	onDateChange,
	placeholder = "Pick a date",
	disabled = false,
	fromDate,
	toDate,
	captionLayout = "dropdown",
	...props
}: DatePickerProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className={cn("w-full", className)} data-slot="date-picker" {...props}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button
						variant="outline"
						className={cn(
							"w-full justify-start text-left font-normal",
							!date && "text-muted-foreground",
						)}
						disabled={disabled}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? formatDate(date) : <span>{placeholder}</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(selectedDate) => {
							onDateChange?.(selectedDate);
							setOpen(false);
						}}
						captionLayout={captionLayout}
						fromDate={fromDate}
						toDate={toDate}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}

export { DatePicker, type DatePickerProps };
