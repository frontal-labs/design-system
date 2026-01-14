"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@frontal/design-system";

export function SelectShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Select>
					<SelectTrigger className="w-96">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectGroupLabel>Fruits</SelectGroupLabel>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
							<SelectItem value="grapes">Grapes</SelectItem>
							<SelectItem value="pineapple">Pineapple</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectGroupLabel>Vegetables</SelectGroupLabel>
							<SelectItem value="aubergine">Aubergine</SelectItem>
							<SelectItem value="broccoli">Broccoli</SelectItem>
							<SelectItem value="carrot" disabled>
								Carrot
							</SelectItem>
							<SelectItem value="courgette">Courgette</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</section>
		</div>
	);
}
