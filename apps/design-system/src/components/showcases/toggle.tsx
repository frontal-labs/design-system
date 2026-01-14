"use client";

import { Toggle } from "@frontal/design-system";
import { Bold, Italic } from "lucide-react";

export function ToggleShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Toggle aria-label="Toggle bold">
					<Bold className="h-4 w-4" />
				</Toggle>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Outline</h3>
				<Toggle variant="outline" aria-label="Toggle italic">
					<Italic className="h-4 w-4" />
				</Toggle>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Text</h3>
				<Toggle variant="outline" aria-label="Toggle italic">
					<Italic className="mr-2 h-4 w-4" />
					Italic
				</Toggle>
			</section>
		</div>
	);
}
