"use client";

import { NavMain } from "@frontal/blocks/sidebar-07/components/nav-main";
import { NavProjects } from "@frontal/blocks/sidebar-07/components/nav-projects";
import { NavUser } from "@frontal/blocks/sidebar-07/components/nav-user";
import { TeamSwitcher } from "@frontal/blocks/sidebar-07/components/team-switcher";
import {
	ArtboardIcon,
	AudioLinesIcon,
	BookOpenIcon,
	CommandIcon,
	MapIcon,
	MoreVariantIcon,
	PieChartIcon,
	SettingsIcon,
	TerminalBoxIcon,
} from "@frontal/icons";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@frontal/ui";
import type * as React from "react";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: MoreVariantIcon,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioLinesIcon,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: CommandIcon,
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "Playground",
			url: "#",
			icon: TerminalBoxIcon,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "SettingsIcon",
					url: "#",
				},
			],
		},
		{
			title: "Models",
			url: "#",
			icon: CommandIcon,
			items: [
				{
					title: "Genesis",
					url: "#",
				},
				{
					title: "Explorer",
					url: "#",
				},
				{
					title: "Quantum",
					url: "#",
				},
			],
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpenIcon,
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
		{
			title: "SettingsIcon",
			url: "#",
			icon: SettingsIcon,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: ArtboardIcon,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChartIcon,
		},
		{
			name: "Travel",
			url: "#",
			icon: MapIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
