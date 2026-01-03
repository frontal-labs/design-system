import { Container } from "@frontal/ui";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container>
				<div className="flex h-14 items-center">
					<div className="mr-4 flex">
						<Link href="/" className="mr-6 flex items-center space-x-2">
							<span className="font-bold">Frontal</span>
						</Link>
						<nav className="flex items-center space-x-6 text-sm font-medium">
							<Link
								href="/components"
								className="transition-colors hover:text-foreground/80"
							>
								Components
							</Link>
							<Link
								href="/forms"
								className="transition-colors hover:text-foreground/80"
							>
								Forms
							</Link>
							<Link
								href="/layouts"
								className="transition-colors hover:text-foreground/80"
							>
								Layouts
							</Link>
							<Link
								href="/dashboard"
								className="transition-colors hover:text-foreground/80"
							>
								Dashboard
							</Link>
						</nav>
					</div>
					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<div className="w-full flex-1 md:w-auto md:flex-none"></div>
						<nav className="flex items-center">
							<ThemeToggle />
						</nav>
					</div>
				</div>
			</Container>
		</header>
	);
}
