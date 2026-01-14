import type { SVGProps } from "react";

export function MenuFold_3Icon({
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
      aria-label="Menu Fold Arrow Left"
      aria-labelledby="Menu Fold Arrow Left"
      aria-hidden={true}
      {...props}
    >
      <path d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM9.01041 8.81412L7.59619 7.3999L3 11.9961L7.59619 16.5923L9.01041 15.1781L5.82843 11.9961L9.01041 8.81412Z" />
    </svg>
  );
}

MenuFold_3Icon.displayName = "MenuFold_3Icon";

export default MenuFold_3Icon;
