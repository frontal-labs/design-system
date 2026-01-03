"use client";

import {
	Button,
	Calendar,
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@frontal/ui";
import * as React from "react";

export default function Calendar10() {
	const [date, setDate] = React.useState<Date | undefined>(
		new Date(2025, 5, 12),
	);
	const [month, setMonth] = React.useState<Date | undefined>(new Date());

	return (
		<Card>
			<CardHeader>
				<CardTitle>Appointment</CardTitle>
				<CardDescription>Find a date</CardDescription>
				<CardAction>
					<Button
						size="small"
						variant="outline"
						onClick={() => {
							setMonth(new Date());
							setDate(new Date());
						}}
					>
						Today
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<Calendar
					mode="single"
					month={month}
					onMonthChange={setMonth}
					selected={date}
					onSelect={setDate}
					className="bg-transparent p-0"
				/>
			</CardContent>
		</Card>
	);
}
