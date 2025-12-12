import type { SVGProps } from 'react';

export function FontColorIcon({
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
      aria-label="Paint Bucket Color Picker Font Color"
      aria-labelledby="Paint Bucket Color Picker Font Color"
      aria-hidden={true}
      {...props}
    >
      <path d="M15.2459 14H8.75407L7.15407 18H5L11 3H13L19 18H16.8459L15.2459 14ZM14.4459 12L12 5.88516L9.55407 12H14.4459ZM3 20H21V22H3V20Z"/>
    </svg>
  );
}

FontColorIcon.displayName = 'FontColorIcon';

export default FontColorIcon;
