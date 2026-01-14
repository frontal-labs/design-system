"use client";

import { Input, Label, Button } from "@frontal/design-system";

export function InputShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Input type="email" placeholder="Email" className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Label</h3>
				<div className="grid items-center gap-1.5 w-96">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="Email" />
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<Input type="email" placeholder="Email" disabled className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Button</h3>
				<div className="flex items-center space-x-2">
					<Input type="email" placeholder="Email" className="w-80" />
					<Button type="submit">Subscribe</Button>
				</div>
			</section>
		</div>
	);
}
