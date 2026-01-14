"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@frontal/design-system";

export function TabsShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Tabs defaultValue="account" className="w-96">
					<TabsList className="grid grid-cols-2">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						Make changes to your account here.
					</TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</Tabs>
			</section>
		</div>
	);
}
