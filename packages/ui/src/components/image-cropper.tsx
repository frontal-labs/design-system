"use client";

import { cn } from "@frontal/shared";
import {
	type ComponentProps,
	type MouseEvent,
	useEffect,
	useRef,
	useState,
} from "react";
import { Button } from "./button";

type ImageCropperProps = ComponentProps<"div"> & {
	image: File | string;
	aspectRatio?: number;
	onCrop?: (croppedImageBlob: Blob) => void;
	onCancel?: () => void;
	minWidth?: number;
	minHeight?: number;
	maxWidth?: number;
	maxHeight?: number;
};

function ImageCropper({
	className,
	image,
	aspectRatio,
	onCrop,
	onCancel,
	minWidth = 100,
	minHeight = 100,
	maxWidth,
	maxHeight,
	...props
}: ImageCropperProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [imageSrc, setImageSrc] = useState<string>("");
	const [cropArea, setCropArea] = useState({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (typeof image === "string") {
			setImageSrc(image);
		} else {
			const reader = new FileReader();
			reader.onload = (e) => {
				setImageSrc(e.target?.result as string);
			};
			reader.readAsDataURL(image);
		}
	}, [image]);

	useEffect(() => {
		if (imageSrc && containerRef.current) {
			const img = new Image();
			img.onload = () => {
				imageRef.current = img;
				const container = containerRef.current;
				if (!container) {
					return;
				}

				const containerWidth = container.clientWidth;
				const containerHeight = container.clientHeight;
				const imgAspectRatio = img.width / img.height;
				const containerAspectRatio = containerWidth / containerHeight;

				let displayWidth: number;
				let displayHeight: number;

				if (imgAspectRatio > containerAspectRatio) {
					displayWidth = containerWidth;
					displayHeight = containerWidth / imgAspectRatio;
				} else {
					displayHeight = containerHeight;
					displayWidth = containerHeight * imgAspectRatio;
				}

				const initialCropSize = Math.min(displayWidth, displayHeight) * 0.8;
				const cropWidth = aspectRatio
					? Math.min(initialCropSize, initialCropSize * aspectRatio)
					: initialCropSize;
				const cropHeight = aspectRatio
					? cropWidth / aspectRatio
					: initialCropSize;

				setCropArea({
					x: (displayWidth - cropWidth) / 2,
					y: (displayHeight - cropHeight) / 2,
					width: cropWidth,
					height: cropHeight,
				});
			};
			img.src = imageSrc;
		}
	}, [imageSrc, aspectRatio]);

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) {
			return;
		}
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		if (
			x >= cropArea.x &&
			x <= cropArea.x + cropArea.width &&
			y >= cropArea.y &&
			y <= cropArea.y + cropArea.height
		) {
			setIsDragging(true);
			setDragStart({
				x: x - cropArea.x,
				y: y - cropArea.y,
			});
		}
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!(isDragging && containerRef.current)) {
			return;
		}
		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - dragStart.x;
		const y = e.clientY - rect.top - dragStart.y;

		const maxX = containerRef.current.clientWidth - cropArea.width;
		const maxY = containerRef.current.clientHeight - cropArea.height;

		setCropArea({
			...cropArea,
			x: Math.max(0, Math.min(x, maxX)),
			y: Math.max(0, Math.min(y, maxY)),
		});
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleCrop = () => {
		if (!(canvasRef.current && imageRef.current)) {
			return;
		}

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			return;
		}

		const img = imageRef.current;
		const scaleX = img.width / (containerRef.current?.clientWidth || 1);
		const scaleY = img.height / (containerRef.current?.clientHeight || 1);

		const cropX = cropArea.x * scaleX;
		const cropY = cropArea.y * scaleY;
		const cropWidth = cropArea.width * scaleX;
		const cropHeight = cropArea.height * scaleY;

		canvas.width = cropWidth;
		canvas.height = cropHeight;

		ctx.drawImage(
			img,
			cropX,
			cropY,
			cropWidth,
			cropHeight,
			0,
			0,
			cropWidth,
			cropHeight,
		);

		canvas.toBlob((blob) => {
			if (blob) {
				onCrop?.(blob);
			}
		}, "image/png");
	};

	return (
		<div
			className={cn("flex flex-col gap-4", className)}
			data-slot="image-cropper"
			{...props}
		>
			<div
				ref={containerRef}
				className="relative overflow-hidden rounded-lg border bg-background"
				style={{ aspectRatio: aspectRatio || "auto", minHeight: "300px" }}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				role="application"
				aria-label="Image cropper"
				data-slot="image-cropper-container"
			>
				{imageSrc && (
					<img
						src={imageSrc}
						alt="Crop preview"
						className="h-full w-full object-contain"
						draggable={false}
						data-slot="image-cropper-image"
					/>
				)}
				<div
					className="absolute cursor-move border-2 border-primary bg-primary/10"
					style={{
						left: `${cropArea.x}px`,
						top: `${cropArea.y}px`,
						width: `${cropArea.width}px`,
						height: `${cropArea.height}px`,
					}}
					data-slot="image-cropper-overlay"
				>
					<div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
						{Array.from({ length: 9 }).map((_, i) => (
							<div
								key={i}
								className="border border-primary/32"
								data-slot="image-cropper-grid-cell"
							/>
						))}
					</div>
				</div>
			</div>
			<canvas ref={canvasRef} className="hidden" />
			<div
				className="flex items-center justify-end gap-2"
				data-slot="image-cropper-actions"
			>
				{onCancel && (
					<Button variant="outline" onClick={onCancel}>
						Cancel
					</Button>
				)}
				<Button onClick={handleCrop}>Crop</Button>
			</div>
		</div>
	);
}

export { ImageCropper, type ImageCropperProps };
