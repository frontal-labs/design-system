"use client";

import { CalendarIcon } from "@frontal/icons";
import {
	Button,
	Calendar,
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Label,
} from "@frontal/ui";
import * as React from "react";

export default function Calendar32() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<div className="flex flex-col gap-3">
			<Label htmlFor="date" className="px-1">
				Date of birth
			</Label>
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<Button
						variant="outline"
						id="date"
						className="w-48 justify-between font-normal"
					>
						{date ? date.toLocaleDateString() : "Select date"}
						<CalendarIcon />
					</Button>
				</DrawerTrigger>
				<DrawerContent className="w-auto overflow-hidden p-0">
					<DrawerHeader className="sr-only">
						<DrawerTitle>Select date</DrawerTitle>
						<DrawerDescription>Set your date of birth</DrawerDescription>
					</DrawerHeader>
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
						className="mx-auto [--cell-size:clamp(0px,calc(100vw/7.5),52px)]"
					/>
				</DrawerContent>
			</Drawer>
			<div className="px-1 text-muted-foreground text-sm">
				This example works best on mobile.
			</div>
		</div>
	);
}
