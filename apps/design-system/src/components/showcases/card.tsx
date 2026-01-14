"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Button,
} from "@frontal/design-system";
import { BellRing } from "lucide-react";

const notifications = [
	{
		title: "Your call has been confirmed.",
		description: "1 hour ago",
	},
	{
		title: "You have a new message!",
		description: "1 hour ago",
	},
	{
		title: "Your subscription is expiring soon!",
		description: "2 hours ago",
	},
];

export function CardShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Card className="w-96">
					<CardHeader>
						<CardTitle>Notifications</CardTitle>
						<CardDescription>You have 3 unread messages.</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						{notifications.map((notification) => (
							<div className="flex items-center gap-4" key={notification.title}>
								<BellRing className="size-6" />
								<div>
									<p>{notification.title}</p>
									<p className="text-foreground/50">{notification.description}</p>
								</div>
							</div>
						))}
					</CardContent>
					<CardFooter>
						<Button className="w-full">Close</Button>
					</CardFooter>
				</Card>
			</section>
		</div>
	);
}
