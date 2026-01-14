"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@frontal/design-system";
import { ArrowRightSquare } from "lucide-react";

export function BreadcrumbShowcase() {
	return (
		<div className="space-y-8">
			<section>
				<h3 className="text-lg font-semibold mb-4">Default</h3>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink>Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</section>
			<section>
				<h3 className="text-lg font-semibold mb-4">With Custom Separator</h3>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<ArrowRightSquare />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink>Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<ArrowRightSquare />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</section>
		</div>
	);
}
