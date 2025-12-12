import type { SVGProps } from 'react';

export function ArrowRightWideIcon({
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
      aria-label="Arrow Right Wide"
      aria-labelledby="Arrow Right Wide"
      aria-hidden={true}
      {...props}
    >
      <path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"/>
    </svg>
  );
}

ArrowRightWideIcon.displayName = 'ArrowRightWideIcon';

export default ArrowRightWideIcon;
