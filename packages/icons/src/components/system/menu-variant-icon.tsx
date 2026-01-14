import type { SVGProps } from "react";

export function MenuVariantIcon({
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
      <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
}

MenuVariantIcon.displayName = "MenuVariantIcon";

export default MenuVariantIcon;
