"use client";

import { Alert, AlertDescription, AlertTitle } from "@frontal/design-system";
import { AlertCircle } from "lucide-react";

export function AlertShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Alert>
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						You can add components to your app using the cli.
					</AlertDescription>
				</Alert>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Destructive</h3>
				<Alert variant="error">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
			</section>
		</div>
	);
}
