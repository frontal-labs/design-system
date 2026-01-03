"use client";

import {
	ArrowDownIcon,
	ArrowUpIcon,
	BellIcon,
	CornerUpLeftIcon,
	CornerUpRightIcon,
	DeleteBinIcon,
	FileCopyIcon,
	FileTextIcon,
	LineChartIcon,
	LinkIcon,
	MoreIcon,
	MoreVariantIcon,
	SettingsIcon,
	StarIcon,
} from "@frontal/icons";
import {
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@frontal/ui";
import * as React from "react";

const data = [
	[
		{
			label: "Customize Page",
			icon: SettingsIcon,
		},
		{
			label: "Turn into wiki",
			icon: FileTextIcon,
		},
	],
	[
		{
			label: "FileCopyIcon LinkIcon",
			icon: LinkIcon,
		},
		{
			label: "Duplicate",
			icon: FileCopyIcon,
		},
		{
			label: "Move to",
			icon: CornerUpRightIcon,
		},
		{
			label: "Move to DeleteBinIcon",
			icon: DeleteBinIcon,
		},
	],
	[
		{
			label: "Undo",
			icon: CornerUpLeftIcon,
		},
		{
			label: "View analytics",
			icon: LineChartIcon,
		},
		{
			label: "Version History",
			icon: MoreVariantIcon,
		},
		{
			label: "Show delete pages",
			icon: DeleteBinIcon,
		},
		{
			label: "Notifications",
			icon: BellIcon,
		},
	],
	[
		{
			label: "Import",
			icon: ArrowUpIcon,
		},
		{
			label: "Export",
			icon: ArrowDownIcon,
		},
	],
];

export function NavActions() {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<div className="flex items-center gap-2 text-sm">
			<div className="hidden font-medium text-muted-foreground md:inline-block">
				Edit Oct 08
			</div>
			<Button variant="ghost" size="icon" className="h-7 w-7">
				<StarIcon />
			</Button>
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="h-7 w-7 data-[state=open]:bg-accent"
					>
						<MoreIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-56 overflow-hidden rounded-lg p-0"
					align="end"
				>
					<Sidebar collapsible="none" className="bg-transparent">
						<SidebarContent>
							{data.map((group) => {
								const groupKey = group.map((item) => item.label).join("-");
								return (
									<SidebarGroup
										key={groupKey}
										className="border-b last:border-none"
									>
										<SidebarGroupContent className="gap-0">
											<SidebarMenu>
												{group.map((item) => (
													<SidebarMenuItem key={item.label}>
														<SidebarMenuButton>
															<item.icon /> <span>{item.label}</span>
														</SidebarMenuButton>
													</SidebarMenuItem>
												))}
											</SidebarMenu>
										</SidebarGroupContent>
									</SidebarGroup>
								);
							})}
						</SidebarContent>
					</Sidebar>
				</PopoverContent>
			</Popover>
		</div>
	);
}
