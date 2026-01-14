"use client";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Button,
} from "@frontal/design-system";

export function DrawerShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Drawer>
					<DrawerTrigger asChild>
						<Button>Open</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
							<DrawerDescription>This action cannot be undone.</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Button type="button">Submit</Button>
							<DrawerClose asChild>
								<Button variant="outline" type="button">
									Cancel
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</section>
		</div>
	);
}
