"use client";

import { CalendarIcon } from "@frontal/icons";
import { cn } from "../utils";
import { type ComponentProps, useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DateRangePickerProps = ComponentProps<"div"> & {
	range?: DateRange;
	onRangeChange?: (range: DateRange | undefined) => void;
	placeholder?: string;
	disabled?: boolean;
	fromDate?: Date;
	toDate?: Date;
	captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
};

function formatDateRange(range: DateRange | undefined): string {
	if (!range?.from) {
		return "";
	}
	if (range.from && !range.to) {
		return range.from.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	}
	if (range.from && range.to) {
		return `${range.from.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		})} - ${range.to.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		})}`;
	}
	return "";
}

function DateRangePicker({
	className,
	range,
	onRangeChange,
	placeholder = "Pick a date range",
	disabled = false,
	fromDate,
	toDate,
	captionLayout = "dropdown",
	...props
}: DateRangePickerProps) {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={cn("w-full", className)}
			data-slot="date-range-picker"
			{...props}
		>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<Button
						variant="outline"
						className={cn(
							"w-full justify-start text-left font-normal",
							!range?.from && "text-muted-foreground",
						)}
						disabled={disabled}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{range?.from ? formatDateRange(range) : <span>{placeholder}</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="range"
						selected={range}
						onSelect={(selectedRange) => {
							onRangeChange?.(selectedRange);
							if (selectedRange?.from && selectedRange?.to) {
								setOpen(false);
							}
						}}
						captionLayout={captionLayout}
						fromDate={fromDate}
						toDate={toDate}
						numberOfMonths={2}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}

export { DateRangePicker, type DateRangePickerProps };
