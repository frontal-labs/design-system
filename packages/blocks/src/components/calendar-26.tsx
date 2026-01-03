"use client";

import { ArrowDownChevronIcon } from "@frontal/icons";
import {
	Button,
	Calendar,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@frontal/ui";
import * as React from "react";

export default function Calendar26() {
	const [openFrom, setOpenFrom] = React.useState(false);
	const [openTo, setOpenTo] = React.useState(false);
	const [dateFrom, setDateFrom] = React.useState<Date | undefined>(
		new Date("2025-06-01"),
	);
	const [dateTo, setDateTo] = React.useState<Date | undefined>(
		new Date("2025-06-03"),
	);

	return (
		<div className="flex w-full min-w-0 max-w-64 flex-col gap-6">
			<div className="flex gap-4">
				<div className="flex flex-1 flex-col gap-3">
					<Label htmlFor="date-from" className="px-1">
						CheckIcon-in
					</Label>
					<Popover open={openFrom} onOpenChange={setOpenFrom}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								id="date-from"
								className="w-full justify-between font-normal"
							>
								{dateFrom
									? dateFrom.toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})
									: "Select date"}
								<ArrowDownChevronIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-auto overflow-hidden p-0"
							align="start"
						>
							<Calendar
								mode="single"
								selected={dateFrom}
								captionLayout="dropdown"
								onSelect={(date) => {
									setDateFrom(date);
									setOpenFrom(false);
								}}
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className="flex flex-col gap-3">
					<Label htmlFor="time-from" className="invisible px-1">
						From
					</Label>
					<Input
						type="time"
						id="time-from"
						step="1"
						defaultValue="10:30:00"
						className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
					/>
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex flex-1 flex-col gap-3">
					<Label htmlFor="date-to" className="px-1">
						CheckIcon-out
					</Label>
					<Popover open={openTo} onOpenChange={setOpenTo}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								id="date-to"
								className="w-full justify-between font-normal"
							>
								{dateTo
									? dateTo.toLocaleDateString("en-US", {
											day: "2-digit",
											month: "short",
											year: "numeric",
										})
									: "Select date"}
								<ArrowDownChevronIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-auto overflow-hidden p-0"
							align="start"
						>
							<Calendar
								mode="single"
								selected={dateTo}
								captionLayout="dropdown"
								onSelect={(date) => {
									setDateTo(date);
									setOpenTo(false);
								}}
								disabled={dateFrom && { before: dateFrom }}
							/>
						</PopoverContent>
					</Popover>
				</div>
				<div className="flex flex-col gap-3">
					<Label htmlFor="time-to" className="invisible px-1">
						To
					</Label>
					<Input
						type="time"
						id="time-to"
						step="1"
						defaultValue="12:30:00"
						className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
					/>
				</div>
			</div>
		</div>
	);
}
