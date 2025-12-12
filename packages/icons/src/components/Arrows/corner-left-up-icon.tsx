import type { SVGProps } from 'react';

export function CornerLeftUpIcon({
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
      aria-label="Corner Left Up"
      aria-labelledby="Corner Left Up"
      aria-hidden={true}
      {...props}
    >
      <path d="M10.0001 19.0001L19 19.0002L19 17.0002L12.0001 17.0001L12 6.8283L15.9497 10.778L17.364 9.36381L11 2.99985L4.63603 9.36381L6.05025 10.778L10 6.82825L10.0001 19.0001Z"/>
    </svg>
  );
}

CornerLeftUpIcon.displayName = 'CornerLeftUpIcon';

export default CornerLeftUpIcon;
