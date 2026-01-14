import { MaisonNeue, MaisonNeueMono } from "./lib/fonts";
import { cn } from "./utils";

export const fonts = cn(
  MaisonNeue.variable,
  MaisonNeueMono.variable,
  "touch-manipulation font-sans leading-normal antialiased"
);

// Export the fonts as an object
// biome-ignore lint/performance/noBarrelFile: This package intentionally uses barrel exports
export { MaisonNeue, MaisonNeueMono } from "./lib/fonts";
