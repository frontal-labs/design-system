"use client";

import { Label } from "@frontal/design-system";

export function LabelShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Label htmlFor="email">Your email address</Label>
			</section>
		</div>
	);
}
