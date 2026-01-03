"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Bar,
	BarChart,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	CartesianGrid,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	Line,
	LineChart,
	Progress,
	ResponsiveContainer,
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
	XAxis,
	YAxis,
} from "@frontal/ui";
import { useState } from "react";

const salesData = [
	{ month: "Jan", sales: 4000, profit: 2400, customers: 240 },
	{ month: "Feb", sales: 3000, profit: 1398, customers: 221 },
	{ month: "Mar", sales: 2000, profit: 9800, customers: 229 },
	{ month: "Apr", sales: 2780, profit: 3908, customers: 200 },
	{ month: "May", sales: 1890, profit: 4800, customers: 218 },
	{ month: "Jun", sales: 2390, profit: 3800, customers: 250 },
];

const recentActivity = [
	{
		id: 1,
		user: "John Doe",
		action: "Created new project",
		status: "Active",
		time: "2 hours ago",
	},
	{
		id: 2,
		user: "Jane Smith",
		action: "Updated profile",
		status: "Completed",
		time: "4 hours ago",
	},
	{
		id: 3,
		user: "Bob Johnson",
		action: "Deleted account",
		status: "Inactive",
		time: "6 hours ago",
	},
	{
		id: 4,
		user: "Alice Brown",
		action: "Published article",
		status: "Active",
		time: "1 day ago",
	},
	{
		id: 5,
		user: "Charlie Wilson",
		action: "Changed password",
		status: "Completed",
		time: "2 days ago",
	},
];

export default function DashboardPage() {
	const [selectedTab, setSelectedTab] = useState("overview");

	return (
		<div className="min-h-screen bg-background">
			<SidebarProvider>
				<div className="flex h-screen w-full">
					<Sidebar>
						<SidebarHeader className="p-4">
							<h3 className="font-semibold">Dashboard</h3>
						</SidebarHeader>
						<SidebarContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>Overview</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Analytics</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Reports</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>Settings</SidebarMenuButton>
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
									<p className="text-muted-foreground">john@example.com</p>
								</div>
							</div>
						</SidebarFooter>
					</Sidebar>
					<SidebarInset>
						<div className="flex h-full flex-col">
							<header className="flex h-16 items-center border-b px-6">
								<SidebarTrigger className="mr-4" />
								<h2 className="text-lg font-semibold">Dashboard Overview</h2>
							</header>
							<main className="flex-1 p-6 overflow-auto">
								<Tabs value={selectedTab} onValueChange={setSelectedTab}>
									<TabsList className="mb-6">
										<TabsTab value="overview">Overview</TabsTab>
										<TabsTab value="analytics">Analytics</TabsTab>
										<TabsTab value="activity">Activity</TabsTab>
									</TabsList>

									<TabsPanel value="overview">
										<div className="space-y-6">
											<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
												<Card>
													<CardHeader className="pb-2">
														<CardTitle className="text-sm font-medium">
															Avg. Session
														</CardTitle>
													</CardHeader>
													<CardPanel>
														<div className="text-2xl font-bold">3m 24s</div>
														<p className="text-xs text-muted-foreground">
															+12s from last month
														</p>
													</CardPanel>
												</Card>
											</div>

											<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
												<Card>
													<CardHeader>
														<CardTitle>Revenue Overview</CardTitle>
													</CardHeader>
													<CardPanel>
														<ChartContainer>
															<ResponsiveContainer width="100%" height={300}>
																<LineChart data={salesData}>
																	<CartesianGrid strokeDasharray="3 3" />
																	<XAxis dataKey="month" />
																	<YAxis />
																	<ChartTooltip
																		content={<ChartTooltipContent />}
																	/>
																	<Line
																		type="monotone"
																		dataKey="sales"
																		stroke="#8884d8"
																		strokeWidth={2}
																		name="Sales"
																	/>
																	<Line
																		type="monotone"
																		dataKey="profit"
																		stroke="#82ca9d"
																		strokeWidth={2}
																		name="Profit"
																	/>
																</LineChart>
															</ResponsiveContainer>
														</ChartContainer>
													</CardPanel>
												</Card>

												<Card>
													<CardHeader>
														<CardTitle>Customer Growth</CardTitle>
													</CardHeader>
													<CardPanel>
														<ChartContainer>
															<ResponsiveContainer width="100%" height={300}>
																<BarChart data={salesData}>
																	<CartesianGrid strokeDasharray="3 3" />
																	<XAxis dataKey="month" />
																	<YAxis />
																	<ChartTooltip
																		content={<ChartTooltipContent />}
																	/>
																	<Bar
																		dataKey="customers"
																		fill="#8884d8"
																		name="Customers"
																	/>
																</BarChart>
															</ResponsiveContainer>
														</ChartContainer>
													</CardPanel>
												</Card>
											</div>
										</div>
									</TabsPanel>

									<TabsPanel value="analytics">
										<div className="space-y-6">
											<Card>
												<CardHeader>
													<CardTitle>Performance Metrics</CardTitle>
												</CardHeader>
												<CardPanel className="space-y-4">
													<div>
														<div className="flex justify-between mb-2">
															<span className="text-sm font-medium">
																Page Load Time
															</span>
															<span className="text-sm text-muted-foreground">
																1.2s
															</span>
														</div>
														<Progress value={75} />
													</div>
													<div>
														<div className="flex justify-between mb-2">
															<span className="text-sm font-medium">
																Server Response
															</span>
															<span className="text-sm text-muted-foreground">
																200ms
															</span>
														</div>
														<Progress value={90} />
													</div>
													<div>
														<div className="flex justify-between mb-2">
															<span className="text-sm font-medium">
																Database Query
															</span>
															<span className="text-sm text-muted-foreground">
																45ms
															</span>
														</div>
														<Progress value={95} />
													</div>
												</CardPanel>
											</Card>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<Card>
													<CardHeader>
														<CardTitle>Traffic Sources</CardTitle>
													</CardHeader>
													<CardPanel>
														<div className="space-y-3">
															<div className="flex justify-between">
																<span>Direct</span>
																<Badge>35%</Badge>
															</div>
															<div className="flex justify-between">
																<span>Social</span>
																<Badge variant="secondary">25%</Badge>
															</div>
															<div className="flex justify-between">
																<span>Referral</span>
																<Badge variant="outline">20%</Badge>
															</div>
															<div className="flex justify-between">
																<span>Organic</span>
																<Badge variant="destructive">20%</Badge>
															</div>
														</div>
													</CardPanel>
												</Card>

												<Card>
													<CardHeader>
														<CardTitle>User Engagement</CardTitle>
													</CardHeader>
													<CardPanel>
														<div className="space-y-3">
															<div className="flex justify-between">
																<span>Daily Active</span>
																<span className="font-medium">1,234</span>
															</div>
															<div className="flex justify-between">
																<span>Weekly Active</span>
																<span className="font-medium">5,678</span>
															</div>
															<div className="flex justify-between">
																<span>Monthly Active</span>
																<span className="font-medium">12,345</span>
															</div>
														</div>
													</CardPanel>
												</Card>
											</div>
										</div>
									</TabsPanel>

									<TabsPanel value="activity">
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
															<TableHead>Time</TableHead>
														</TableRow>
													</TableHeader>
													<TableBody>
														{recentActivity.map((activity) => (
															<TableRow key={activity.id}>
																<TableCell className="font-medium">
																	{activity.user}
																</TableCell>
																<TableCell>{activity.action}</TableCell>
																<TableCell>
																	<Badge
																		variant={
																			activity.status === "Active"
																				? "default"
																				: activity.status === "Completed"
																					? "secondary"
																					: "destructive"
																		}
																	>
																		{activity.status}
																	</Badge>
																</TableCell>
																<TableCell className="text-muted-foreground">
																	{activity.time}
																</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											</CardPanel>
										</Card>
									</TabsPanel>
								</Tabs>
							</main>
						</div>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
