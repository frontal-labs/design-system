"use client";

import { Button } from "@frontal/design-system";
import { Loader2, Mail } from "lucide-react";

export function ButtonShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Variants</h3>
				<div className="flex gap-4 flex-wrap">
					<Button variant="primary">Primary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="link">Link</Button>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Sizes</h3>
				<div className="flex gap-4 items-center flex-wrap">
					<Button size="xsmall">XSmall</Button>
					<Button size="small">Small</Button>
					<Button size="medium">Medium</Button>
					<Button size="large">Large</Button>
					<Button size="xlarge">XLarge</Button>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Icon</h3>
				<Button>
					<Mail className="mr-2 h-4 w-4" /> Login with Email
				</Button>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Loading</h3>
				<Button disabled>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Loading
				</Button>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<Button disabled>Disabled</Button>
			</section>
		</div>
	);
}
