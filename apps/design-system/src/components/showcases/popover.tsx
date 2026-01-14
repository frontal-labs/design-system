"use client";

import { Popover, PopoverContent, PopoverTrigger, Button } from "@frontal/design-system";

export function PopoverShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Popover>
					<PopoverTrigger asChild>
						<Button>Open</Button>
					</PopoverTrigger>
					<PopoverContent>Place content for the popover here.</PopoverContent>
				</Popover>
			</section>
		</div>
	);
}
