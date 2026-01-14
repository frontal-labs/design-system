"use client";

import { Tooltip, TooltipContent, TooltipTrigger, Button } from "@frontal/design-system";
import { Plus } from "lucide-react";

export function TooltipShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (Top)</h3>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline" size="icon">
							<Plus className="h-4 w-4" />
							<span className="sr-only">Add</span>
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Bottom</h3>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline" size="icon">
							<Plus className="h-4 w-4" />
							<span className="sr-only">Add</span>
						</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom">
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</section>
		</div>
	);
}
