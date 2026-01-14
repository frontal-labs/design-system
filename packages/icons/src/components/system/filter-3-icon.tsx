import type { SVGProps } from "react";

export function Filter_3Icon({
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
      aria-label="Filter Horizontal Bars"
      aria-labelledby="Filter Horizontal Bars"
      aria-hidden={true}
      {...props}
    >
      <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
    </svg>
  );
}

Filter_3Icon.displayName = "Filter_3Icon";

export default Filter_3Icon;
