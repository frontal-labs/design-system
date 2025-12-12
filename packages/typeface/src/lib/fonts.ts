import localFont from "next/font/local";

export const MaisonNeue = localFont({
	src: [
		{
			path: "../../fonts/maison-neue-light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-light-italic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../fonts/maison-neue-book.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-book-italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../fonts/maison-neue-medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-medium-italic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../fonts/maison-neue-demi.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-demi-italic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../fonts/maison-neue-bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-bold-italic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-maison-neue",
	adjustFontFallback: false,
	fallback: [
		"ui-sans-serif",
		"system-ui",
		"-apple-system",
		"BlinkMacSystemFont",
		"Inter",
		"Segoe UI",
		"Roboto",
		"sans-serif",
		"Apple Color Emoji",
		"Segoe UI Emoji",
		"Segoe UI Symbol",
		"Noto Color Emoji",
	],
	weight: "300 400 500 600 700",
});

export const MaisonNeueMono = localFont({
	src: [
		{
			path: "../../fonts/maison-neue-mono.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../fonts/maison-neue-mono-italic.woff2",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-maison-neue-mono",
	adjustFontFallback: false,
	fallback: [
		"ui-monospace",
		"SFMono-Regular",
		"Menlo",
		"Monaco",
		"Liberation Mono",
		"DejaVu Sans Mono",
		"Courier New",
		"monospace",
	],
	weight: "400",
});
