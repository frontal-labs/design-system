"use client";

import { AspectRatio } from "@frontal/design-system";

export function AspectRatioShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">16:9 (Default)</h3>
				<div className="w-full max-w-md">
					<AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
						<div className="flex items-center justify-center h-full text-muted-foreground">
							16:9 Aspect Ratio
						</div>
					</AspectRatio>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Square (1:1)</h3>
				<div className="w-full max-w-md">
					<AspectRatio ratio={1} className="bg-muted rounded-md">
						<div className="flex items-center justify-center h-full text-muted-foreground">
							1:1 Aspect Ratio
						</div>
					</AspectRatio>
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Landscape (4:3)</h3>
				<div className="w-full max-w-md">
					<AspectRatio ratio={4 / 3} className="bg-muted rounded-md">
						<div className="flex items-center justify-center h-full text-muted-foreground">
							4:3 Aspect Ratio
						</div>
					</AspectRatio>
				</div>
			</section>
		</div>
	);
}
