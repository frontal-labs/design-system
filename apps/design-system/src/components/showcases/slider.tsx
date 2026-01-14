"use client";

import { Slider } from "@frontal/design-system";

export function SliderShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Slider defaultValue={[33]} max={100} step={1} className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<Slider defaultValue={[33]} max={100} step={1} disabled className="w-96" />
			</section>
		</div>
	);
}
