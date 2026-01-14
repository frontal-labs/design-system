"use client";

import { RadioGroup, RadioGroupItem, Label } from "@frontal/design-system";

export function RadioGroupShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<RadioGroup defaultValue="comfortable" className="grid gap-2 grid-cols-[1rem_1fr] items-center">
					<RadioGroupItem id="r1" value="default" />
					<Label htmlFor="r1">Default</Label>
					<RadioGroupItem id="r2" value="comfortable" />
					<Label htmlFor="r2">Comfortable</Label>
					<RadioGroupItem id="r3" value="compact" />
					<Label htmlFor="r3">Compact</Label>
				</RadioGroup>
			</section>
		</div>
	);
}
