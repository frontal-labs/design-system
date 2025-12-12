import type { SVGProps } from 'react';

export function ArrowDownIcon({
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
      aria-label="Arrow Down Direction"
      aria-labelledby="Arrow Down Direction"
      aria-hidden={true}
      {...props}
    >
      <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"/>
    </svg>
  );
}

ArrowDownIcon.displayName = 'ArrowDownIcon';

export default ArrowDownIcon;
