import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Frontal Design System Showcase",
	description: "Interactive showcase of all Frontal Design System components",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
