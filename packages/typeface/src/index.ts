import { twMerge } from "tailwind-merge";
import { MaisonNeue, MaisonNeueMono } from "./lib/fonts";

export const fonts = twMerge(
	MaisonNeue.variable,
	MaisonNeueMono.variable,
	"touch-manipulation font-sans leading-normal antialiased",
);

// Export the fonts as an object
export { MaisonNeue, MaisonNeueMono } from "./lib/fonts";
