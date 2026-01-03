"use client";

import { TimeIcon } from "@frontal/icons";
import { cn } from "@frontal/shared";
import {
	type ChangeEvent,
	type ComponentProps,
	type KeyboardEvent,
	useState,
} from "react";
import { Input } from "./input";
import { Label } from "./label";

type TimePickerProps = ComponentProps<"div"> & {
	value?: string; // Format: "HH:mm" or "HH:mm:ss"
	onTimeChange?: (time: string) => void;
	placeholder?: string;
	disabled?: boolean;
	showSeconds?: boolean;
	step?: number; // in seconds
	min?: string;
	max?: string;
	label?: string;
};

function TimePicker({
	className,
	value,
	onTimeChange,
	placeholder,
	disabled = false,
	showSeconds = false,
	step = 60,
	min,
	max,
	label,
	...props
}: TimePickerProps) {
	const [timeValue, setTimeValue] = useState(value || "");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setTimeValue(newValue);
		onTimeChange?.(newValue);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "ArrowUp" || e.key === "ArrowDown") {
			e.preventDefault();
			// Reserved: e.currentTarget can be used for input element access
			const [hours, minutes, seconds] = (timeValue || "00:00:00")
				.split(":")
				.map(Number);
			const totalSeconds =
				(hours ?? 0) * 3600 + (minutes ?? 0) * 60 + (seconds || 0);
			const stepSeconds = step || 60;
			const newTotalSeconds =
				e.key === "ArrowUp"
					? Math.min(totalSeconds + stepSeconds, 86399) // Max 23:59:59
					: Math.max(totalSeconds - stepSeconds, 0);

			const newHours = Math.floor(newTotalSeconds / 3600);
			const newMinutes = Math.floor((newTotalSeconds % 3600) / 60);
			const newSeconds = newTotalSeconds % 60;

			const formattedTime = showSeconds
				? `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`
				: `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`;

			setTimeValue(formattedTime);
			onTimeChange?.(formattedTime);
		}
	};

	return (
		<div
			className={cn("flex w-full flex-col gap-2", className)}
			data-slot="time-picker"
			{...props}
		>
			{label && (
				<Label htmlFor="time-picker-input" data-slot="time-picker-label">
					{label}
				</Label>
			)}
			<div className="relative" data-slot="time-picker-container">
				<TimeIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-2.5 size-4 select-none text-muted-foreground" />
				<Input
					id="time-picker-input"
					type="time"
					value={timeValue}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					placeholder={placeholder}
					min={min}
					max={max}
					step={step}
					className={cn(
						"pl-8",
						showSeconds && "[&::-webkit-calendar-picker-indicator]:hidden",
						className,
					)}
					data-slot="time-picker-input"
				/>
			</div>
		</div>
	);
}

export { TimePicker, type TimePickerProps };
