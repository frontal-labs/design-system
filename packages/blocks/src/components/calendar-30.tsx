"use client";

import { ArrowDownChevronIcon } from "@frontal/icons";
import {
	Button,
	Calendar,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@frontal/ui";
import { formatDateRange } from "little-date";
import * as React from "react";
import type { DateRange } from "react-day-picker";

export default function Calendar30() {
	const [range, setRange] = React.useState<DateRange | undefined>({
		from: new Date(2025, 5, 4),
		to: new Date(2025, 5, 10),
	});

	return (
		<div className="flex flex-col gap-3">
			<Label htmlFor="dates" className="px-1">
				Select your stay
			</Label>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id="dates"
						className="w-56 justify-between font-normal"
					>
						{range?.from && range?.to
							? formatDateRange(range.from, range.to, {
									includeTime: false,
								})
							: "Select date"}
						<ArrowDownChevronIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="range"
						selected={range}
						captionLayout="dropdown"
						onSelect={(range) => {
							setRange(range);
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
