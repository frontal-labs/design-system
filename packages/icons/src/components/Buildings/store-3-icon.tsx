import type { SVGProps } from 'react';

export function Store_3Icon({
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
      aria-label="Store Shop Building"
      aria-labelledby="Store Shop Building"
      aria-hidden={true}
      {...props}
    >
      <path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"/>
    </svg>
  );
}

Store_3Icon.displayName = 'Store_3Icon';

export default Store_3Icon;
