import { Button, Container, Heading, Text } from "@frontal/ui";
import Link from "next/link";

export function Hero() {
	return (
		<section className="relative overflow-hidden py-20 sm:py-32">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
			<Container className="relative">
				<div className="mx-auto max-w-4xl text-center">
					<Heading level={1} className="mb-6">
						Frontal Design System
					</Heading>
					<Text
						size="lg"
						className="mb-8 text-muted-foreground max-w-2xl mx-auto"
					>
						A comprehensive, accessible, and modern design system built with
						React, TypeScript, and Tailwind CSS. Build beautiful applications
						faster.
					</Text>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Link href="/components">
							<Button size="lg" className="w-full sm:w-auto">
								Explore Components
							</Button>
						</Link>
						<Link href="/dashboard">
							<Button variant="outline" size="lg" className="w-full sm:w-auto">
								View Dashboard
							</Button>
						</Link>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl font-bold mb-2">50+</div>
							<div className="text-sm text-muted-foreground">Components</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">100%</div>
							<div className="text-sm text-muted-foreground">TypeScript</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">A+</div>
							<div className="text-sm text-muted-foreground">Accessibility</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">MIT</div>
							<div className="text-sm text-muted-foreground">License</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
