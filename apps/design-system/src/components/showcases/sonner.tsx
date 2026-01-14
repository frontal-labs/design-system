"use client";

import { Button } from "@frontal/design-system";
import { toast } from "sonner";

export function SonnerShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default Toast</h3>
				<Button
					onClick={() =>
						toast("Event has been created", {
							description: new Date().toLocaleString(),
						})
					}
					type="button"
				>
					Show Toast
				</Button>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Success Toast</h3>
				<Button
					onClick={() => toast.success("Success!")}
					type="button"
					variant="outline"
				>
					Show Success
				</Button>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Error Toast</h3>
				<Button
					onClick={() => toast.error("Something went wrong")}
					type="button"
					variant="destructive"
				>
					Show Error
				</Button>
			</section>
		</div>
	);
}
