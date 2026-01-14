"use client";

import { Progress } from "@frontal/design-system";

export function ProgressShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (30%)</h3>
				<Progress value={30} className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Indeterminate</h3>
				<Progress value={0} className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Completed (100%)</h3>
				<Progress value={100} className="w-96" />
			</section>
		</div>
	);
}
