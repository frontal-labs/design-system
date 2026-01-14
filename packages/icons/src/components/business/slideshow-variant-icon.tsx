import type { SVGProps } from "react";

export function SlideshowVariantIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-label="Slideshow Presentation Screen"
      aria-labelledby="Slideshow Presentation Screen"
      aria-hidden={true}
      {...props}
    >
      <path d="M13 17V20H18V22H6V20H11V17H4C3.44772 17 3 16.5523 3 16V4H2V2H22V4H21V16C21 16.5523 20.5523 17 20 17H13ZM5 15H19V4H5V15ZM10 6L15 9.5L10 13V6Z" />
    </svg>
  );
}

SlideshowVariantIcon.displayName = "SlideshowVariantIcon";

export default SlideshowVariantIcon;
