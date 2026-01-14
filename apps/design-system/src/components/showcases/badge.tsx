"use client";

import { Badge } from "@frontal/design-system";

export function BadgeShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Variants</h3>
				<div className="flex gap-4 flex-wrap">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			</section>
		</div>
	);
}
