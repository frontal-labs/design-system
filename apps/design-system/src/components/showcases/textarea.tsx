"use client";

import { Textarea, Label, Button } from "@frontal/design-system";

export function TextareaShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Textarea placeholder="Type your message here." className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Label</h3>
				<div className="grid w-full gap-1.5">
					<Label htmlFor="message">Your message</Label>
					<Textarea id="message" placeholder="Type your message here." />
				</div>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">Disabled</h3>
				<Textarea placeholder="Type your message here." disabled className="w-96" />
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Button</h3>
				<div className="grid w-full gap-2">
					<Textarea placeholder="Type your message here." className="w-96" />
					<Button type="submit">Send Message</Button>
				</div>
			</section>
		</div>
	);
}
