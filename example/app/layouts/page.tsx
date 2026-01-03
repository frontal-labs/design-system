import {
	Alert,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Button,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	Progress,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from "@frontal/ui";
import Link from "next/link";

export default function LayoutsPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-4">Layout Examples</h1>
					<p className="text-muted-foreground">
						Dashboard, landing page, and other layout patterns.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Dashboard Layout Example */}
					<Card>
						<CardHeader>
							<CardTitle>Dashboard Layout</CardTitle>
						</CardHeader>
						<CardPanel>
							<SidebarProvider>
								<div className="flex h-[600px] w-full">
									<Sidebar>
										<SidebarHeader className="p-4">
											<h3 className="font-semibold">Dashboard</h3>
										</SidebarHeader>
										<SidebarContent>
											<SidebarMenu>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">Overview</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">Analytics</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">Reports</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
												<SidebarMenuItem>
													<SidebarMenuButton asChild>
														<Link href="#">Settings</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											</SidebarMenu>
										</SidebarContent>
										<SidebarFooter className="p-4">
											<div className="flex items-center space-x-2">
												<Avatar className="h-8 w-8">
													<AvatarImage src="https://github.com/shadcn.png" />
													<AvatarFallback>JD</AvatarFallback>
												</Avatar>
												<div className="text-sm">
													<p className="font-medium">John Doe</p>
													<p className="text-muted-foreground">
														john@example.com
													</p>
												</div>
											</div>
										</SidebarFooter>
									</Sidebar>
									<SidebarInset>
										<div className="flex h-full flex-col">
											<header className="flex h-16 items-center border-b px-6">
												<SidebarTrigger className="mr-4" />
												<h2 className="text-lg font-semibold">
													Dashboard Overview
												</h2>
											</header>
											<main className="flex-1 p-6">
												<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
													<Card>
														<CardHeader className="pb-2">
															<CardTitle className="text-sm font-medium">
																Total Revenue
															</CardTitle>
														</CardHeader>
														<CardPanel>
															<div className="text-2xl font-bold">$45,231</div>
															<p className="text-xs text-muted-foreground">
																+20.1% from last month
															</p>
														</CardPanel>
													</Card>
													<Card>
														<CardHeader className="pb-2">
															<CardTitle className="text-sm font-medium">
																Active Users
															</CardTitle>
														</CardHeader>
														<CardPanel>
															<div className="text-2xl font-bold">2,350</div>
															<p className="text-xs text-muted-foreground">
																+180 from last month
															</p>
														</CardPanel>
													</Card>
													<Card>
														<CardHeader className="pb-2">
															<CardTitle className="text-sm font-medium">
																Conversion Rate
															</CardTitle>
														</CardHeader>
														<CardPanel>
															<div className="text-2xl font-bold">12.5%</div>
															<p className="text-xs text-muted-foreground">
																+2.1% from last month
															</p>
														</CardPanel>
													</Card>
												</div>
												<Card>
													<CardHeader>
														<CardTitle>Recent Activity</CardTitle>
													</CardHeader>
													<CardPanel>
														<Table>
															<TableHeader>
																<TableRow>
																	<TableHead>User</TableHead>
																	<TableHead>Action</TableHead>
																	<TableHead>Status</TableHead>
																</TableRow>
															</TableHeader>
															<TableBody>
																<TableRow>
																	<TableCell>John Doe</TableCell>
																	<TableCell>Created new project</TableCell>
																	<TableCell>
																		<Badge variant="default">Active</Badge>
																	</TableCell>
																</TableRow>
																<TableRow>
																	<TableCell>Jane Smith</TableCell>
																	<TableCell>Updated profile</TableCell>
																	<TableCell>
																		<Badge variant="secondary">Completed</Badge>
																	</TableCell>
																</TableRow>
																<TableRow>
																	<TableCell>Bob Johnson</TableCell>
																	<TableCell>Deleted account</TableCell>
																	<TableCell>
																		<Badge variant="destructive">
																			Inactive
																		</Badge>
																	</TableCell>
																</TableRow>
															</TableBody>
														</Table>
													</CardPanel>
												</Card>
											</main>
										</div>
									</SidebarInset>
								</div>
							</SidebarProvider>
						</CardPanel>
					</Card>

					{/* Landing Page Layout Example */}
					<Card>
						<CardHeader>
							<CardTitle>Landing Page Layout</CardTitle>
						</CardHeader>
						<CardPanel>
							<div className="h-[600px] overflow-y-auto">
								{/* Hero Section */}
								<section className="text-center py-12 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-8">
									<h2 className="text-4xl font-bold mb-4">
										Build Amazing Products
									</h2>
									<p className="text-xl text-muted-foreground mb-6">
										The modern design system for building beautiful, accessible
										user interfaces.
									</p>
									<div className="flex justify-center space-x-4">
										<Button size="lg">Get Started</Button>
										<Button variant="outline" size="lg">
											View Documentation
										</Button>
									</div>
								</section>

								{/* Features Section */}
								<section className="mb-8">
									<h3 className="text-2xl font-bold text-center mb-8">
										Features
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<Card>
											<CardHeader>
												<CardTitle>Modern Components</CardTitle>
											</CardHeader>
											<CardPanel>
												<p className="text-muted-foreground">
													A comprehensive set of modern, accessible UI
													components built with React and Tailwind CSS.
												</p>
											</CardPanel>
										</Card>
										<Card>
											<CardHeader>
												<CardTitle>TypeScript Support</CardTitle>
											</CardHeader>
											<CardPanel>
												<p className="text-muted-foreground">
													Full TypeScript support with type-safe components and
													excellent developer experience.
												</p>
											</CardPanel>
										</Card>
										<Card>
											<CardHeader>
												<CardTitle>Customizable</CardTitle>
											</CardHeader>
											<CardPanel>
												<p className="text-muted-foreground">
													Easily customize components to match your brand and
													design requirements.
												</p>
											</CardPanel>
										</Card>
										<Card>
											<CardHeader>
												<CardTitle>Accessible</CardTitle>
											</CardHeader>
											<CardPanel>
												<p className="text-muted-foreground">
													Built with accessibility in mind, following WCAG
													guidelines and best practices.
												</p>
											</CardPanel>
										</Card>
									</div>
								</section>

								{/* Stats Section */}
								<section className="mb-8">
									<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
										<div>
											<div className="text-3xl font-bold">50+</div>
											<p className="text-muted-foreground">Components</p>
										</div>
										<div>
											<div className="text-3xl font-bold">100%</div>
											<p className="text-muted-foreground">TypeScript</p>
										</div>
										<div>
											<div className="text-3xl font-bold">A+</div>
											<p className="text-muted-foreground">Accessibility</p>
										</div>
										<div>
											<div className="text-3xl font-bold">MIT</div>
											<p className="text-muted-foreground">License</p>
										</div>
									</div>
								</section>

								{/* CTA Section */}
								<section className="text-center py-8 bg-muted rounded-lg">
									<h3 className="text-2xl font-bold mb-4">
										Ready to get started?
									</h3>
									<p className="text-muted-foreground mb-6">
										Join thousands of developers building amazing products with
										our design system.
									</p>
									<Button size="lg">Start Building</Button>
								</section>
							</div>
						</CardPanel>
					</Card>
				</div>

				{/* Additional Layout Examples */}
				<div className="mt-8">
					<Card>
						<CardHeader>
							<CardTitle>Layout Components</CardTitle>
						</CardHeader>
						<CardPanel>
							<Tabs defaultValue="tabs">
								<TabsList className="mb-4">
									<TabsTab value="tabs">Tabs Layout</TabsTab>
									<TabsTab value="progress">Progress Layout</TabsTab>
									<TabsTab value="alert">Alert Layout</TabsTab>
								</TabsList>

								<TabsPanel value="tabs">
									<div className="space-y-4">
										<p className="text-muted-foreground">
											Tab-based layouts are perfect for organizing related
											content in a compact space.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<Card>
												<CardHeader>
													<CardTitle className="text-lg">Dashboard</CardTitle>
												</CardHeader>
												<CardPanel>
													<p className="text-sm text-muted-foreground">
														Overview of your application metrics and key
														performance indicators.
													</p>
												</CardPanel>
											</Card>
											<Card>
												<CardHeader>
													<CardTitle className="text-lg">Analytics</CardTitle>
												</CardHeader>
												<CardPanel>
													<p className="text-sm text-muted-foreground">
														Detailed analytics and user behavior insights.
													</p>
												</CardPanel>
											</Card>
											<Card>
												<CardHeader>
													<CardTitle className="text-lg">Reports</CardTitle>
												</CardHeader>
												<CardPanel>
													<p className="text-sm text-muted-foreground">
														Generate and export custom reports.
													</p>
												</CardPanel>
											</Card>
										</div>
									</div>
								</TabsPanel>

								<TabsPanel value="progress">
									<div className="space-y-4">
										<p className="text-muted-foreground">
											Progress indicators help users understand completion
											status and loading states.
										</p>
										<div className="space-y-6">
											<div>
												<div className="flex justify-between mb-2">
													<span className="text-sm font-medium">
														Profile Completion
													</span>
													<span className="text-sm text-muted-foreground">
														75%
													</span>
												</div>
												<Progress value={75} />
											</div>
											<div>
												<div className="flex justify-between mb-2">
													<span className="text-sm font-medium">
														Project Setup
													</span>
													<span className="text-sm text-muted-foreground">
														45%
													</span>
												</div>
												<Progress value={45} />
											</div>
											<div>
												<div className="flex justify-between mb-2">
													<span className="text-sm font-medium">
														Data Migration
													</span>
													<span className="text-sm text-muted-foreground">
														90%
													</span>
												</div>
												<Progress value={90} />
											</div>
										</div>
									</div>
								</TabsPanel>

								<TabsPanel value="alert">
									<div className="space-y-4">
										<p className="text-muted-foreground">
											Alert components provide important information and
											feedback to users.
										</p>
										<div className="space-y-4">
											<Alert>
												<strong>Success!</strong> Your changes have been saved
												successfully.
											</Alert>
											<Alert variant="warning">
												<strong>Warning:</strong> Your session will expire in 5
												minutes.
											</Alert>
											<Alert variant="destructive">
												<strong>Error:</strong> Failed to connect to the server.
												Please try again.
											</Alert>
										</div>
									</div>
								</TabsPanel>
							</Tabs>
						</CardPanel>
					</Card>
				</div>
			</div>
		</div>
	);
}
