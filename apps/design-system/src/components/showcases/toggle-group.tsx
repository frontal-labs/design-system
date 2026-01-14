"use client";

import { ToggleGroup, ToggleGroupItem } from "@frontal/design-system";
import { Bold, Italic, Underline } from "lucide-react";

export function ToggleGroupShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (Single)</h3>
				<ToggleGroup type="single" {...{ variant: "default" } as any}>
					<ToggleGroupItem aria-label="Toggle bold" value="bold">
						<Bold className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle italic" value="italic">
						<Italic className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle underline" value="underline">
						<Underline className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Multiple</h3>
				<ToggleGroup type="multiple" {...{ variant: "default" } as any}>
					<ToggleGroupItem aria-label="Toggle bold" value="bold">
						<Bold className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle italic" value="italic">
						<Italic className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle underline" value="underline">
						<Underline className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Outline</h3>
				<ToggleGroup type="single" variant="outline" {...{} as any}>
					<ToggleGroupItem aria-label="Toggle bold" value="bold">
						<Bold className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle italic" value="italic">
						<Italic className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem aria-label="Toggle underline" value="underline">
						<Underline className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			</section>
		</div>
	);
}
