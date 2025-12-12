import type { SVGProps } from 'react';

export function StopLargeIcon({
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
      aria-label="Stop Media Control"
      aria-labelledby="Stop Media Control"
      aria-hidden={true}
      {...props}
    >
      <path d="M5 5H19V19H5V5ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z"/>
    </svg>
  );
}

StopLargeIcon.displayName = 'StopLargeIcon';

export default StopLargeIcon;
