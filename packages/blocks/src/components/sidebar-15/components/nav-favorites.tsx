"use client";

import {
	ArrowUpRightIcon,
	DeleteBinIcon,
	LinkIcon,
	MoreIcon,
	StarOffIcon,
} from "@frontal/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@frontal/ui";

export function NavFavorites({
	favorites,
}: {
	favorites: {
		name: string;
		url: string;
		emoji: string;
	}[];
}) {
	const { isMobile } = useSidebar();

	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Favorites</SidebarGroupLabel>
			<SidebarMenu>
				{favorites.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild>
							<a href={item.url} title={item.name}>
								<span>{item.emoji}</span>
								<span>{item.name}</span>
							</a>
						</SidebarMenuButton>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuAction showOnHover>
									<MoreIcon />
									<span className="sr-only">More</span>
								</SidebarMenuAction>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-56 rounded-lg"
								side={isMobile ? "bottom" : "right"}
								align={isMobile ? "end" : "start"}
							>
								<DropdownMenuItem>
									<StarOffIcon className="text-muted-foreground" />
									<span>Remove from Favorites</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<LinkIcon className="text-muted-foreground" />
									<span>Copy LinkIcon</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<ArrowUpRightIcon className="text-muted-foreground" />
									<span>Open in New Tab</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<DeleteBinIcon className="text-muted-foreground" />
									<span>Delete</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}
				<SidebarMenuItem>
					<SidebarMenuButton className="text-sidebar-foreground/70">
						<MoreIcon />
						<span>More</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
