"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@frontal/design-system";

export function AvatarShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
				</div>
			</section>
		</div>
	);
}
