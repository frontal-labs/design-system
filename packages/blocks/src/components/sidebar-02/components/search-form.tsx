import { SearchIcon } from "@frontal/icons";
import {
	Label,
	SidebarGroup,
	SidebarGroupContent,
	SidebarInput,
} from "@frontal/ui";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
	return (
		<form {...props}>
			<SidebarGroup className="py-0">
				<SidebarGroupContent className="relative">
					<Label htmlFor="search" className="sr-only">
						SearchIcon
					</Label>
					<SidebarInput
						id="search"
						placeholder="SearchIcon the docs..."
						className="pl-8"
					/>
					<SearchIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-2 size-4 select-none opacity-50" />
				</SidebarGroupContent>
			</SidebarGroup>
		</form>
	);
}
