"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@frontal/design-system";
import { Info } from "lucide-react";

export function CollapsibleShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Collapsible className="w-96">
					<CollapsibleTrigger className="flex gap-2 items-center">
						<h3 className="font-semibold">Can I use this in my project?</h3>
						<Info className="size-6" />
					</CollapsibleTrigger>
					<CollapsibleContent>
						Yes. Free to use for personal and commercial projects. No attribution
						required.
					</CollapsibleContent>
				</Collapsible>
			</section>
		</div>
	);
}
