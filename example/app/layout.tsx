import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@frontal-ds/ui/styles.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Frontal Design System Examples",
	description: "Examples and demos of the Frontal Design System components",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
