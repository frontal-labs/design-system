"use client";

import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@frontal/design-system";

export function ResizableShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (Horizontal)</h3>
				<ResizablePanelGroup direction="horizontal" className="max-w-96 rounded-lg border">
					<ResizablePanel defaultSize={50}>
						<div className="flex h-[200px] items-center justify-center p-6">
							<span className="font-semibold">One</span>
						</div>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={50}>
						<div className="flex h-[200px] items-center justify-center p-6">
							<span className="font-semibold">Two</span>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</section>
		</div>
	);
}
