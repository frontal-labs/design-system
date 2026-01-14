"use client";

import { Calendar } from "@frontal/design-system";
import { useState } from "react";

export function CalendarShowcase() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (Single)</h3>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Multiple Months</h3>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					numberOfMonths={2}
					className="rounded-md border"
				/>
			</section>
		</div>
	);
}
