import type { SVGProps } from 'react';

export function SpaceIcon({
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
      aria-label="Space"
      aria-labelledby="Space"
      aria-hidden={true}
      {...props}
    >
      <path d="M4 9V13H20V9H22V14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14V9H4Z"/>
    </svg>
  );
}

SpaceIcon.displayName = 'SpaceIcon';

export default SpaceIcon;
