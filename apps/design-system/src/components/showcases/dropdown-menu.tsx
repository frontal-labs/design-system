"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
	Button,
} from "@frontal/design-system";
import { Mail, Plus } from "lucide-react";

export function DropdownMenuShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Open</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-44">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Shortcuts</h3>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Open</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-44">
						<DropdownMenuLabel>Controls</DropdownMenuLabel>
						<DropdownMenuItem>
							Back
							<DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem disabled>
							Forward
							<DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Icons</h3>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Open</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-44">
						<DropdownMenuItem>
							<Mail className="mr-2 size-4" />
							<span>Email</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Plus className="mr-2 size-4" />
							<span>New Item</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</section>
		</div>
	);
}
