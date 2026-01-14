import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Alert,
	AlertTitle,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Button,
	Card,
	CardHeader,
	CardPanel,
	CardTitle,
	Checkbox,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Progress,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	Slider,
	Spinner,
	Switch,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	Textarea,
} from "@frontal-ds/ui";
import { useState } from "react";

export default function ComponentsPage() {
	const [inputValue, setInputValue] = useState("");
	const [textareaValue, setTextareaValue] = useState("");
	const [isChecked, setIsChecked] = useState(false);
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const [sliderValue, setSliderValue] = useState([50]);
	const [progress] = useState(75);
	const [selectedTab, setSelectedTab] = useState("buttons");

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-4">Component Showcase</h1>
				<p className="text-muted-foreground">
					Explore all available UI components with examples and variations.
				</p>
			</div>

			<Tabs value={selectedTab} onValueChange={setSelectedTab}>
				<TabsList className="mb-8">
					<TabsTab value="buttons">Buttons</TabsTab>
					<TabsTab value="forms">Forms</TabsTab>
					<TabsTab value="feedback">Feedback</TabsTab>
					<TabsTab value="navigation">Navigation</TabsTab>
					<TabsTab value="display">Display</TabsTab>
				</TabsList>

				<TabsPanel value="buttons">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Buttons</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="flex flex-wrap gap-4">
									<Button>Primary</Button>
									<Button variant="secondary">Secondary</Button>
									<Button variant="outline">Outline</Button>
									<Button variant="ghost">Ghost</Button>
									<Button variant="destructive">Destructive</Button>
								</div>
								<div className="flex flex-wrap gap-4">
									<Button size="sm">Small</Button>
									<Button size="default">Default</Button>
									<Button size="lg">Large</Button>
								</div>
								<div className="flex flex-wrap gap-4">
									<Button disabled>Disabled</Button>
									<Button loading>Loading</Button>
								</div>
							</CardPanel>
						</Card>
					</div>
				</TabsPanel>

				<TabsPanel value="forms">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Input Fields</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="space-y-2">
									<label htmlFor="text-input">Text Input</label>
									<Input
										id="text-input"
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										placeholder="Enter text..."
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="textarea">Textarea</label>
									<Textarea
										id="textarea"
										value={textareaValue}
										onChange={(e) => setTextareaValue(e.target.value)}
										placeholder="Enter longer text..."
										rows={4}
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="select">Select</label>
									<Select>
										<SelectTrigger>
											<span>Select an option</span>
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="option1">Option 1</SelectItem>
											<SelectItem value="option2">Option 2</SelectItem>
											<SelectItem value="option3">Option 3</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</CardPanel>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Selection Controls</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="flex items-center space-x-2">
									<Checkbox
										checked={isChecked}
										onCheckedChange={setIsChecked}
										id="checkbox"
									/>
									<label htmlFor="checkbox">Checkbox option</label>
								</div>
								<div className="flex items-center space-x-2">
									<Switch
										checked={isSwitchOn}
										onCheckedChange={setIsSwitchOn}
										id="switch"
									/>
									<label htmlFor="switch">Switch option</label>
								</div>
							</CardPanel>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Range Controls</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="space-y-2">
									<label htmlFor="slider">Slider: {sliderValue[0]}</label>
									<Slider
										id="slider"
										value={sliderValue}
										onValueChange={setSliderValue}
										max={100}
										step={1}
									/>
								</div>
								<div className="space-y-2">
									<div>Progress: {progress}%</div>
									<Progress value={progress} />
								</div>
							</CardPanel>
						</Card>
					</div>
				</TabsPanel>

				<TabsPanel value="feedback">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Badges</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="flex flex-wrap gap-2">
									<Badge>Default</Badge>
									<Badge variant="secondary">Secondary</Badge>
									<Badge variant="outline">Outline</Badge>
									<Badge variant="destructive">Destructive</Badge>
								</div>
							</CardPanel>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Alerts</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<Alert>
									<AlertTitle>Information</AlertTitle>
									This is an informational alert message.
								</Alert>
								<Alert variant="warning">
									<AlertTitle>Warning</AlertTitle>
									This is a warning alert message.
								</Alert>
								<Alert variant="destructive">
									<AlertTitle>Error</AlertTitle>
									This is an error alert message.
								</Alert>
							</CardPanel>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Loading States</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="flex items-center space-x-4">
									<Spinner />
									<span>Loading...</span>
								</div>
							</CardPanel>
						</Card>
					</div>
				</TabsPanel>

				<TabsPanel value="navigation">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Dialog</CardTitle>
							</CardHeader>
							<CardPanel>
								<Dialog>
									<DialogTrigger asChild>
										<Button>Open Dialog</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Dialog Title</DialogTitle>
										</DialogHeader>
										<div className="py-4">
											This is the dialog content. You can put any content here.
										</div>
									</DialogContent>
								</Dialog>
							</CardPanel>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Accordion</CardTitle>
							</CardHeader>
							<CardPanel>
								<Accordion type="single" collapsible>
									<AccordionItem value="item-1">
										<AccordionTrigger>What is this component?</AccordionTrigger>
										<AccordionContent>
											This is an accordion component that allows you to show and
											hide content.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-2">
										<AccordionTrigger>How does it work?</AccordionTrigger>
										<AccordionContent>
											Click on the header to expand or collapse the content
											section.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value="item-3">
										<AccordionTrigger>Can I customize it?</AccordionTrigger>
										<AccordionContent>
											Yes, you can customize the appearance and behavior through
											props.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</CardPanel>
						</Card>
					</div>
				</TabsPanel>

				<TabsPanel value="display">
					<div className="space-y-8">
						<Card>
							<CardHeader>
								<CardTitle>Avatar</CardTitle>
							</CardHeader>
							<CardPanel className="space-y-4">
								<div className="flex items-center space-x-4">
									<Avatar>
										<AvatarImage src="https://github.com/shadcn.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium">John Doe</p>
										<p className="text-sm text-muted-foreground">
											john@example.com
										</p>
									</div>
								</div>
							</CardPanel>
						</Card>
					</div>
				</TabsPanel>
			</Tabs>
		</div>
	);
}
