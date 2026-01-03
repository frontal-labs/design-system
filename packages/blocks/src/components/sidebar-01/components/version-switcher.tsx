"use client";

import { ArrowUpDownIcon, CheckIcon, MoreVariantIcon } from "@frontal/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@frontal/ui";
import * as React from "react";

export function VersionSwitcher({
	versions,
	defaultVersion,
}: {
	versions: string[];
	defaultVersion: string;
}) {
	const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="large"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
								<MoreVariantIcon className="size-4" />
							</div>
							<div className="flex flex-col gap-0.5 leading-none">
								<span className="font-medium">Documentation</span>
								<span className="">v{selectedVersion}</span>
							</div>
							<ArrowUpDownIcon className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width)"
						align="start"
					>
						{versions.map((version) => (
							<DropdownMenuItem
								key={version}
								onSelect={() => setSelectedVersion(version)}
							>
								v{version}{" "}
								{version === selectedVersion && (
									<CheckIcon className="ml-auto" />
								)}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
