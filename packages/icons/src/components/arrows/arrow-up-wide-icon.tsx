import type { SVGProps } from "react";

export function ArrowUpWideIcon({
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
      aria-label="Arrow Up Wide"
      aria-labelledby="Arrow Up Wide"
      aria-hidden={true}
      {...props}
    >
      <path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96789 14.8838L3.03211 13.1162L12 8.36853Z" />
    </svg>
  );
}

ArrowUpWideIcon.displayName = "ArrowUpWideIcon";

export default ArrowUpWideIcon;
