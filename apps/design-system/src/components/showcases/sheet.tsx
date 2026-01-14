"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	Button,
} from "@frontal/design-system";

export function SheetShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default (Right)</h3>
				<Sheet>
					<SheetTrigger asChild>
						<Button>Open</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline" type="button">
									Cancel
								</Button>
							</SheetClose>
							<Button type="button">Submit</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</section>
		</div>
	);
}
