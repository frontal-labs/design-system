"use client";

import { Separator } from "@frontal/design-system";

export function SeparatorShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Horizontal</h3>
				<div className="grid gap-2 w-96">
					<div>Top</div>
					<Separator orientation="horizontal" />
					<div>Bottom</div>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Vertical</h3>
				<div className="flex gap-2 items-center">
					<div>Left</div>
					<Separator className="h-auto" orientation="vertical" />
					<div>Right</div>
				</div>
			</section>
		</div>
	);
}
