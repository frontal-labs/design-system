import type { SVGProps } from 'react';

export function FileDamageIcon({
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
      aria-label="File Document Damage"
      aria-labelledby="File Document Damage"
      aria-hidden={true}
      {...props}
    >
      <path d="M19 9H14V4H5V11.8571L6.5 13.25L10 9.5L13 14.5L15 12L18 15L15 14.5L13 17L10 13L7 16.5L5 15.25V20H19V9ZM21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8Z"/>
    </svg>
  );
}

FileDamageIcon.displayName = 'FileDamageIcon';

export default FileDamageIcon;
