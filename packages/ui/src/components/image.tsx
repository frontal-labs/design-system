"use client";

import {
	type ComponentProps,
	type ImgHTMLAttributes,
	type ReactNode,
	type SyntheticEvent,
	useState,
} from "react";
import { cn } from "../utils";
import { Skeleton } from "./skeleton";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> &
	ComponentProps<"div"> & {
		src?: string;
		alt: string;
		loading?: "lazy" | "eager";
		fallback?: ReactNode;
		showSkeleton?: boolean;
		objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
	};

function Image({
	className,
	src,
	alt,
	loading = "lazy",
	fallback,
	showSkeleton = true,
	objectFit = "cover",
	onLoad,
	onError,
	...props
}: ImageProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		setIsLoading(false);
		onLoad?.(e);
	};

	const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		setIsLoading(false);
		setHasError(true);
		onError?.(e);
	};

	return (
		<div
			className={cn("relative overflow-hidden", className)}
			data-slot="image"
			{...props}
		>
			{isLoading && showSkeleton && (
				<Skeleton className="absolute inset-0" data-slot="image-skeleton" />
			)}
			{hasError && fallback ? (
				<div
					className="absolute inset-0 flex items-center justify-center"
					data-slot="image-fallback"
				>
					{fallback}
				</div>
			) : (
				// biome-ignore lint/performance/noImgElement: Generic Image component for use outside Next.js contexts
				<img
					src={src}
					alt={alt}
					loading={loading}
					onLoad={handleLoad}
					onError={handleError}
					className={cn(
						"h-full w-full transition-opacity duration-200",
						isLoading && "opacity-0",
						!(isLoading || hasError) && "opacity-100",
						objectFit === "contain" && "object-contain",
						objectFit === "cover" && "object-cover",
						objectFit === "fill" && "object-fill",
						objectFit === "none" && "object-none",
						objectFit === "scale-down" && "object-scale-down",
					)}
					data-slot="image-img"
				/>
			)}
		</div>
	);
}

export { Image, type ImageProps };
