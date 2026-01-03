import { MaisonNeue, MaisonNeueMono } from "./lib/fonts";
import { cn } from "./utils";

export const fonts = cn(
	MaisonNeue.variable,
	MaisonNeueMono.variable,
	"touch-manipulation font-sans leading-normal antialiased",
);

// Export the fonts as an object
export { MaisonNeue, MaisonNeueMono } from "./lib/fonts";
