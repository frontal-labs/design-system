import type { SVGProps } from 'react';

export function Layout_4Icon({
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
      aria-label="Layout Grid Four Panel"
      aria-labelledby="Layout Grid Four Panel"
      aria-hidden={true}
      {...props}
    >
      <path d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM11 13H5V19H11V13ZM13 19H19V5H13V19ZM11 5H5V11H11V5Z"/>
    </svg>
  );
}

Layout_4Icon.displayName = 'Layout_4Icon';

export default Layout_4Icon;
