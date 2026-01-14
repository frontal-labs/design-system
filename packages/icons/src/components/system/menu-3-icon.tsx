import type { SVGProps } from "react";

export function Menu_3Icon({
  width = 24,
  height = 24,
  color = "currentColor",
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
      <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

Menu_3Icon.displayName = "Menu_3Icon";

export default Menu_3Icon;
