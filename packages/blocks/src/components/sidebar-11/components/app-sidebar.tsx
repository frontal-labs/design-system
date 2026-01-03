import { ArrowRightIcon, FileIcon, FolderIcon } from "@frontal/icons";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarRail,
} from "@frontal/ui";
import type * as React from "react";

// This is sample data.
const data = {
	changes: [
		{
			file: "README.md",
			state: "M",
		},
		{
			file: "api/hello/route.ts",
			state: "U",
		},
		{
			file: "app/layout.tsx",
			state: "M",
		},
	],
	tree: [
		[
			"app",
			[
				"api",
				["hello", ["route.ts"]],
				"page.tsx",
				"layout.tsx",
				["blog", ["page.tsx"]],
			],
		],
		[
			"components",
			["ui", "button.tsx", "card.tsx"],
			"header.tsx",
			"footer.tsx",
		],
		["lib", ["util.ts"]],
		["public", "favicon.ico", "vercel.svg"],
		".eslintrc.json",
		".gitignore",
		"next.config.js",
		"tailwind.config.js",
		"package.json",
		"README.md",
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Changes</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{data.changes.map((item) => (
								<SidebarMenuItem key={item.file}>
									<SidebarMenuButton>
										<FileIcon />
										{item.file}
									</SidebarMenuButton>
									<SidebarMenuBadge>{item.state}</SidebarMenuBadge>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Files</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{data.tree.map((item, index) => {
								const name = Array.isArray(item) ? item[0] : item;
								return <Tree key={`tree-${index}-${name}`} item={item} />;
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}

type TreeItem = string | TreeItem[];

function Tree({ item }: { item: TreeItem }) {
	const [name, ...items] = Array.isArray(item) ? item : [item];

	if (!items.length) {
		return (
			<SidebarMenuButton
				isActive={name === "button.tsx"}
				className="data-[active=true]:bg-transparent"
			>
				<FileIcon />
				{name}
			</SidebarMenuButton>
		);
	}

	return (
		<SidebarMenuItem>
			<Collapsible
				className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				defaultOpen={name === "components" || name === "ui"}
			>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton>
						<ArrowRightIcon className="transition-transform" />
						<FolderIcon />
						{name}
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{items.map((subItem, index) => {
							const subName = Array.isArray(subItem) ? subItem[0] : subItem;
							return (
								<Tree key={`${name}-${index}-${subName}`} item={subItem} />
							);
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</Collapsible>
		</SidebarMenuItem>
	);
}
