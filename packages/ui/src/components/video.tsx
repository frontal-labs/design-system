"use client";

import { type SyntheticEvent, useState, type VideoHTMLAttributes } from "react";
import { cn } from "../utils";
import { Skeleton } from "./skeleton";

type VideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
	src?: string;
	showSkeleton?: boolean;
	objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
	containerClassName?: string;
};

function Video({
	className,
	src,
	showSkeleton = true,
	objectFit = "cover",
	onLoadStart,
	onLoadedData,
	onError,
	containerClassName,
	...props
}: VideoProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const handleLoadStart = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
		setIsLoading(true);
		onLoadStart?.(e);
	};

	const handleLoadedData = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
		setIsLoading(false);
		onLoadedData?.(e);
	};

	const handleError = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
		setIsLoading(false);
		setHasError(true);
		onError?.(e);
	};

	return (
		<div
			className={cn("relative overflow-hidden", containerClassName)}
			data-slot="video"
		>
			{isLoading && showSkeleton && (
				<Skeleton className="absolute inset-0" data-slot="video-skeleton" />
			)}
			<video
				src={src}
				onLoadStart={handleLoadStart}
				onLoadedData={handleLoadedData}
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
					className,
				)}
				data-slot="video-element"
				{...props}
			/>
		</div>
	);
}

export { Video, type VideoProps };
