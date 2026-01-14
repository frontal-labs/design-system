"use client";

import { Switch, Label } from "@frontal/design-system";

export function SwitchShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<div className="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<Label htmlFor="airplane-mode" className="peer-disabled:text-foreground/50">
						Airplane Mode
					</Label>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<div className="flex items-center space-x-2">
					<Switch id="disabled-switch" disabled />
					<Label htmlFor="disabled-switch" className="peer-disabled:text-foreground/50">
						Disabled Switch
					</Label>
				</div>
			</section>
		</div>
	);
}
