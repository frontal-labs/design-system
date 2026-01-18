import {
	Button,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	Container,
} from "@frontal-labs/ui";
import Link from "next/link";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<Hero />
			<Container className="py-20">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4">Explore Examples</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Discover comprehensive examples showcasing the Frontal Design System
						capabilities
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Component Showcase
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Browse all available UI components with interactive examples and
								variations.
							</p>
							<Link href="/components">
								<Button className="w-full">View Components</Button>
							</Link>
						</CardPanel>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Form Examples
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Complete form examples with validation, error handling, and
								real-world scenarios.
							</p>
							<Link href="/forms">
								<Button className="w-full">View Forms</Button>
							</Link>
						</CardPanel>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Layout Examples
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Dashboard, landing page, and other layout patterns with
								responsive design.
							</p>
							<Link href="/layouts">
								<Button className="w-full">View Layouts</Button>
							</Link>
						</CardPanel>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Interactive Dashboard
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Full-featured dashboard with charts, tables, and real-time data
								visualization.
							</p>
							<Link href="/dashboard">
								<Button className="w-full">View Dashboard</Button>
							</Link>
						</CardPanel>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Theme System
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Dark/light mode, color schemes, typography, and theme
								customization.
							</p>
							<Link href="/themes">
								<Button className="w-full">View Themes</Button>
							</Link>
						</CardPanel>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle className="group-hover:text-primary transition-colors">
								Accessibility
							</CardTitle>
						</CardHeader>
						<CardPanel>
							<p className="text-muted-foreground mb-4">
								Accessibility examples, ARIA patterns, and inclusive design
								practices.
							</p>
							<Link href="/accessibility">
								<Button className="w-full">View A11y</Button>
							</Link>
						</CardPanel>
					</Card>
				</div>
			</Container>
		</div>
	);
}
