"use client";

import { cn } from "@frontal/shared";
import { type ComponentProps, useState } from "react";
import { DatePicker } from "./date-picker";
import { TimePicker } from "./time-picker";

type DateTimePickerProps = ComponentProps<"div"> & {
	date?: Date;
	onDateTimeChange?: (date: Date | undefined) => void;
	datePlaceholder?: string;
	timePlaceholder?: string;
	disabled?: boolean;
	showSeconds?: boolean;
	fromDate?: Date;
	toDate?: Date;
	captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
	dateLabel?: string;
	timeLabel?: string;
};

function DateTimePicker({
	className,
	date,
	onDateTimeChange,
	datePlaceholder = "Pick a date",
	timePlaceholder,
	disabled = false,
	showSeconds = false,
	fromDate,
	toDate,
	captionLayout = "dropdown",
	dateLabel,
	timeLabel,
	...props
}: DateTimePickerProps) {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);
	const [timeValue, setTimeValue] = useState<string>(
		date
			? `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}${showSeconds ? `:${String(date.getSeconds()).padStart(2, "0")}` : ""}`
			: "",
	);

	const handleDateChange = (newDate: Date | undefined) => {
		setSelectedDate(newDate);
		if (newDate && timeValue) {
			const [hours, minutes, seconds] = timeValue.split(":").map(Number);
			const combinedDate = new Date(newDate);
			combinedDate.setHours(hours || 0, minutes || 0, seconds || 0);
			onDateTimeChange?.(combinedDate);
		} else {
			onDateTimeChange?.(newDate);
		}
	};

	const handleTimeChange = (newTime: string) => {
		setTimeValue(newTime);
		if (selectedDate && newTime) {
			const [hours, minutes, seconds] = newTime.split(":").map(Number);
			const combinedDate = new Date(selectedDate);
			combinedDate.setHours(hours || 0, minutes || 0, seconds || 0);
			onDateTimeChange?.(combinedDate);
		}
	};

	return (
		<div
			className={cn("flex w-full flex-col gap-4", className)}
			data-slot="date-time-picker"
			{...props}
		>
			<DatePicker
				date={selectedDate}
				onDateChange={handleDateChange}
				placeholder={datePlaceholder}
				disabled={disabled}
				fromDate={fromDate}
				toDate={toDate}
				captionLayout={captionLayout}
			/>
			<TimePicker
				value={timeValue}
				onTimeChange={handleTimeChange}
				placeholder={timePlaceholder}
				disabled={disabled || !selectedDate}
				showSeconds={showSeconds}
				label={timeLabel}
			/>
		</div>
	);
}

export { DateTimePicker, type DateTimePickerProps };
