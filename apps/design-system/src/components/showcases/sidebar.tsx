"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@frontal/design-system";
import { LayoutGrid } from "lucide-react";

export function SidebarShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<div className="h-[400px] w-full border rounded-lg">
					<SidebarProvider>
						<Sidebar collapsible="icon">
							<SidebarHeader>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton size="large">
											<LayoutGrid />
											<span>Component Showcase</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarHeader>
							<SidebarContent>
								<SidebarGroup>
									<SidebarGroupLabel>Components</SidebarGroupLabel>
									<SidebarMenu>
										<SidebarMenuItem>
											<SidebarMenuButton>Button</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton>Input</SidebarMenuButton>
										</SidebarMenuItem>
										<SidebarMenuItem>
											<SidebarMenuButton>Card</SidebarMenuButton>
										</SidebarMenuItem>
									</SidebarMenu>
								</SidebarGroup>
							</SidebarContent>
							<SidebarRail />
						</Sidebar>
						<SidebarInset>
							<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
								<SidebarTrigger />
							</header>
							<div className="flex flex-1 items-center justify-center p-6">
								<p className="text-muted-foreground">Main content area</p>
							</div>
						</SidebarInset>
					</SidebarProvider>
				</div>
			</section>
		</div>
	);
}
