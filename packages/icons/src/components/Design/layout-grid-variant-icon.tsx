import type { SVGProps } from 'react';

export function LayoutGridVariantIcon({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-label="Grid Layout Design"
      aria-labelledby="Grid Layout Design"
      aria-hidden={true}
      {...props}
    >
      <path d="M4 10L8 10V14H4V10ZM4 19V16H8V19H4ZM10 19V16H14V19H10ZM16 19V16H20V19H16ZM16 14V10H20V14H16ZM16 8V5H20V8H16ZM14 5V8H10V5H14ZM14 10V14H10V10H14ZM4 8V5H8V8L4 8ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3Z"/>
    </svg>
  );
}

LayoutGridVariantIcon.displayName = 'LayoutGridVariantIcon';

export default LayoutGridVariantIcon;
