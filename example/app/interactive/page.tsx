"use client";

import {
	Badge,
	Bar,
	BarChart,
	Button,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	CartesianGrid,
	Cell,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	Input,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
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
	{ month: "Jan", sales: 4000, profit: 2400 },
	{ month: "Feb", sales: 3000, profit: 1398 },
	{ month: "Mar", sales: 2000, profit: 9800 },
	{ month: "Apr", sales: 2780, profit: 3908 },
	{ month: "May", sales: 1890, profit: 4800 },
	{ month: "Jun", sales: 2390, profit: 3800 },
];

const categoryData = [
	{ name: "Electronics", value: 400, color: "#0088FE" },
	{ name: "Clothing", value: 300, color: "#00C49F" },
	{ name: "Food", value: 300, color: "#FFBB28" },
	{ name: "Books", value: 200, color: "#FF8042" },
];

const tableData = [
	{
		id: 1,
		name: "John Doe",
		email: "john@example.com",
		role: "Admin",
		status: "Active",
		lastActive: "2024-01-15",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "jane@example.com",
		role: "User",
		status: "Active",
		lastActive: "2024-01-14",
	},
	{
		id: 3,
		name: "Bob Johnson",
		email: "bob@example.com",
		role: "User",
		status: "Inactive",
		lastActive: "2024-01-10",
	},
	{
		id: 4,
		name: "Alice Brown",
		email: "alice@example.com",
		role: "Moderator",
		status: "Active",
		lastActive: "2024-01-16",
	},
	{
		id: 5,
		name: "Charlie Wilson",
		email: "charlie@example.com",
		role: "User",
		status: "Pending",
		lastActive: "2024-01-12",
	},
];

export default function InteractivePage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRole, setSelectedRole] = useState("all");
	const [selectedChart, setSelectedChart] = useState("line");

	const filteredData = tableData.filter((item) => {
		const matchesSearch =
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.email.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesRole = selectedRole === "all" || item.role === selectedRole;
		return matchesSearch && matchesRole;
	});

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-4">Interactive Examples</h1>
				<p className="text-muted-foreground">
					Charts, tables, and other interactive component demos.
				</p>
			</div>

			<Tabs value={selectedChart} onValueChange={setSelectedChart}>
				<TabsList className="mb-8">
					<TabsTab value="line">Line Chart</TabsTab>
					<TabsTab value="bar">Bar Chart</TabsTab>
					<TabsTab value="pie">Pie Chart</TabsTab>
					<TabsTab value="table">Data Table</TabsTab>
				</TabsList>

				<TabsPanel value="line">
					<Card>
						<CardHeader>
							<CardTitle>Sales & Profit Trends</CardTitle>
						</CardHeader>
						<CardPanel>
							<ChartContainer>
								<ResponsiveContainer width="100%" height={300}>
									<LineChart data={salesData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<ChartTooltip content={<ChartTooltipContent />} />
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
				</TabsPanel>

				<TabsPanel value="bar">
					<Card>
						<CardHeader>
							<CardTitle>Monthly Sales Comparison</CardTitle>
						</CardHeader>
						<CardPanel>
							<ChartContainer>
								<ResponsiveContainer width="100%" height={300}>
									<BarChart data={salesData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<ChartTooltip content={<ChartTooltipContent />} />
										<Bar dataKey="sales" fill="#8884d8" name="Sales" />
										<Bar dataKey="profit" fill="#82ca9d" name="Profit" />
									</BarChart>
								</ResponsiveContainer>
							</ChartContainer>
						</CardPanel>
					</Card>
				</TabsPanel>

				<TabsPanel value="pie">
					<Card>
						<CardHeader>
							<CardTitle>Category Distribution</CardTitle>
						</CardHeader>
						<CardPanel>
							<ChartContainer>
								<ResponsiveContainer width="100%" height={300}>
									<PieChart>
										<Pie
											data={categoryData}
											cx="50%"
											cy="50%"
											labelLine={false}
											label={({ name, percent }) =>
												`${name} ${(percent * 100).toFixed(0)}%`
											}
											outerRadius={80}
											fill="#8884d8"
											dataKey="value"
										>
											{categoryData.map((entry) => (
												<Cell key={entry.name} fill={entry.color} />
											))}
										</Pie>
										<ChartTooltip content={<ChartTooltipContent />} />
									</PieChart>
								</ResponsiveContainer>
							</ChartContainer>
						</CardPanel>
					</Card>
				</TabsPanel>

				<TabsPanel value="table">
					<Card>
						<CardHeader>
							<CardTitle>User Management Table</CardTitle>
						</CardHeader>
						<CardPanel>
							<div className="flex flex-col sm:flex-row gap-4 mb-6">
								<Input
									placeholder="Search users..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="max-w-sm"
								/>
								<Select value={selectedRole} onValueChange={setSelectedRole}>
									<SelectTrigger className="max-w-xs">
										<span>
											{selectedRole === "all" ? "All Roles" : selectedRole}
										</span>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Roles</SelectItem>
										<SelectItem value="Admin">Admin</SelectItem>
										<SelectItem value="User">User</SelectItem>
										<SelectItem value="Moderator">Moderator</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="rounded-md border">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>ID</TableHead>
											<TableHead>Name</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Role</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Last Active</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{filteredData.map((user) => (
											<TableRow key={user.id}>
												<TableCell>{user.id}</TableCell>
												<TableCell className="font-medium">
													{user.name}
												</TableCell>
												<TableCell>{user.email}</TableCell>
												<TableCell>
													<Badge
														variant={
															user.role === "Admin" ? "default" : "secondary"
														}
													>
														{user.role}
													</Badge>
												</TableCell>
												<TableCell>
													<Badge
														variant={
															user.status === "Active"
																? "default"
																: user.status === "Inactive"
																	? "destructive"
																	: "secondary"
														}
													>
														{user.status}
													</Badge>
												</TableCell>
												<TableCell>{user.lastActive}</TableCell>
												<TableCell>
													<div className="flex space-x-2">
														<Button variant="outline" size="sm">
															Edit
														</Button>
														<Button variant="destructive" size="sm">
															Delete
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>

							<div className="mt-4 text-sm text-muted-foreground">
								Showing {filteredData.length} of {tableData.length} users
							</div>
						</CardPanel>
					</Card>
				</TabsPanel>
			</Tabs>
		</div>
	);
}
