"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger, Button } from "@frontal/design-system";

export function HoverCardShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Button variant="link">Hover</Button>
					</HoverCardTrigger>
					<HoverCardContent>
						The React Framework - created and maintained by @vercel.
					</HoverCardContent>
				</HoverCard>
			</section>
		</div>
	);
}
