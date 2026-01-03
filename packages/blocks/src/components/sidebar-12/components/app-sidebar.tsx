import { Calendars } from "@frontal/blocks/sidebar-12/components/calendars";
import { DatePicker } from "@frontal/blocks/sidebar-12/components/date-picker";
import { NavUser } from "@frontal/blocks/sidebar-12/components/nav-user";
import { AddIcon } from "@frontal/icons";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
} from "@frontal/ui";
import type * as React from "react";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	calendars: [
		{
			name: "My Calendars",
			items: ["Personal", "Work", "Family"],
		},
		{
			name: "Favorites",
			items: ["Holidays", "Birthdays"],
		},
		{
			name: "Other",
			items: ["Travel", "Reminders", "Deadlines"],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="h-16 border-sidebar-border border-b">
				<NavUser user={data.user} />
			</SidebarHeader>
			<SidebarContent>
				<DatePicker />
				<SidebarSeparator className="mx-0" />
				<Calendars calendars={data.calendars} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<AddIcon />
							<span>New Calendar</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
