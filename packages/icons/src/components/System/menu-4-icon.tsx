import type { SVGProps } from 'react';

export function Menu_4Icon({
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
      aria-label="Menu Hamburger Navigation"
      aria-labelledby="Menu Hamburger Navigation"
      aria-hidden={true}
      {...props}
    >
      <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"/>
    </svg>
  );
}

Menu_4Icon.displayName = 'Menu_4Icon';

export default Menu_4Icon;
