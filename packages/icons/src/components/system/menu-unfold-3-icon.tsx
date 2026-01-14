import type { SVGProps } from "react";

export function MenuUnfold_3Icon({
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
      aria-label="Menu Unfold Arrow"
      aria-labelledby="Menu Unfold Arrow"
      aria-hidden={true}
      {...props}
    >
      <path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM15.9896 8.81412L17.4038 7.3999L22 11.9961L17.4038 16.5923L15.9896 15.1781L19.1716 11.9961L15.9896 8.81412Z" />
    </svg>
  );
}

MenuUnfold_3Icon.displayName = "MenuUnfold_3Icon";

export default MenuUnfold_3Icon;
