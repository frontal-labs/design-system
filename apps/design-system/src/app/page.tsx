import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@frontal/design-system";
import Link from "next/link";

const categories = [
	{
		name: "Layout",
		description: "Layout components for structuring your UI",
		components: [
			"Accordion",
			"Aspect Ratio",
			"Card",
			"Collapsible",
			"Resizable",
			"Scroll Area",
			"Separator",
			"Skeleton",
		],
		href: "/docs/components/accordion",
	},
	{
		name: "Forms",
		description: "Form components and inputs",
		components: [
			"Button",
			"Checkbox",
			"Input",
			"Input OTP",
			"Label",
			"Radio Group",
			"Select",
			"Slider",
			"Switch",
			"Textarea",
			"Form",
		],
		href: "/docs/components/button",
	},
	{
		name: "Navigation",
		description: "Navigation and menu components",
		components: ["Breadcrumb", "Dropdown Menu", "Pagination", "Sidebar", "Tabs"],
		href: "/docs/components/breadcrumb",
	},
	{
		name: "Overlays",
		description: "Dialog, popover, and overlay components",
		components: [
			"Alert Dialog",
			"Dialog",
			"Drawer",
			"Hover Card",
			"Popover",
			"Sheet",
			"Tooltip",
		],
		href: "/docs/components/alert-dialog",
	},
	{
		name: "Feedback",
		description: "Alert, progress, and notification components",
		components: ["Alert", "Progress", "Sonner"],
		href: "/docs/components/alert",
	},
	{
		name: "Data Display",
		description: "Components for displaying data",
		components: ["Avatar", "Badge", "Calendar", "Chart", "Table"],
		href: "/docs/components/avatar",
	},
	{
		name: "Interactive",
		description: "Interactive components",
		components: ["Toggle", "Toggle Group"],
		href: "/docs/components/toggle",
	},
];

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="border-b">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-4xl font-bold mb-2">Frontal Design System</h1>
					<p className="text-muted-foreground">
						Explore all components in our design system
					</p>
				</div>
			</div>
			<div className="container mx-auto px-4 py-12">
				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Component Categories</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Browse components organized by category
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{categories.map((category) => (
						<Card key={category.name} className="hover:shadow-lg transition-shadow">
							<CardHeader>
								<CardTitle className="group-hover:text-primary transition-colors">
									{category.name}
								</CardTitle>
								<CardDescription>{category.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-2 mb-4">
									<p className="text-sm font-medium">Components:</p>
									<div className="flex flex-wrap gap-2">
										{category.components.slice(0, 3).map((component) => (
											<span
												key={component}
												className="text-xs bg-muted px-2 py-1 rounded"
											>
												{component}
											</span>
										))}
										{category.components.length > 3 && (
											<span className="text-xs text-muted-foreground">
												+{category.components.length - 3} more
											</span>
										)}
									</div>
								</div>
								<Link href={category.href}>
									<Button className="w-full">Explore {category.name}</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
