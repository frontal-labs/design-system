import type { SVGProps } from 'react';

export function FontSizeVariantIcon({
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
      aria-label="Font Size Text"
      aria-labelledby="Font Size Text"
      aria-hidden={true}
      {...props}
    >
      <path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z"/>
    </svg>
  );
}

FontSizeVariantIcon.displayName = 'FontSizeVariantIcon';

export default FontSizeVariantIcon;
