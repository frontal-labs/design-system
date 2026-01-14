"use client";

import { Checkbox, Label } from "@frontal/design-system";

export function CheckboxShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<div className="flex items-center space-x-2">
					<Checkbox id="terms" />
					<Label
						htmlFor="terms"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Accept terms and conditions
					</Label>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<div className="flex items-center space-x-2">
					<Checkbox id="disabled-terms" disabled />
					<Label
						htmlFor="disabled-terms"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Disabled checkbox
					</Label>
				</div>
			</section>
		</div>
	);
}
