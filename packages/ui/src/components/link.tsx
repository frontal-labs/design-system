import { cn } from "@frontal/shared";
import type { ComponentProps } from "react";

// Try to import Next.js Link, but make it optional
let NextLink: typeof import("next/link").default | null = null;

try {
	// Dynamic import for Next.js Link
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const nextLink = require("next/link");
	NextLink = nextLink.default;
} catch {
	// Next.js is not available, will fallback to anchor tag
}

interface LinkProps extends ComponentProps<"a"> {
	href: string;
	external?: boolean;
	replace?: boolean;
	scroll?: boolean;
	shallow?: boolean;
	prefetch?: boolean;
	locale?: string;
}

function Link({
	className,
	href,
	external,
	replace,
	scroll,
	shallow,
	prefetch,
	locale,
	children,
	...props
}: LinkProps) {
	const isExternal =
		external ||
		href.startsWith("http://") ||
		href.startsWith("https://") ||
		href.startsWith("mailto:") ||
		href.startsWith("tel:");

	// Use anchor tag for external links or if Next.js is not available
	if (isExternal || !NextLink) {
		return (
			<a
				data-slot="link"
				data-external={isExternal}
				href={href}
				className={cn(
					"text-primary underline-offset-4 hover:underline",
					className,
				)}
				{...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
				{...props}
			>
				{children}
			</a>
		);
	}

	// Use Next.js Link for internal links
	return (
		<NextLink
			data-slot="link"
			href={href}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			prefetch={prefetch}
			locale={locale}
			className={cn(
				"text-primary underline-offset-4 hover:underline",
				className,
			)}
			{...props}
		>
			{children}
		</NextLink>
	);
}

export { Link };
export type { LinkProps };
