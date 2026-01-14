import type { SVGProps } from "react";

export function AlignRightIcon({
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
      aria-label="Align Right"
      aria-labelledby="Align Right"
      aria-hidden={true}
      {...props}
    >
      <path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z" />
    </svg>
  );
}

AlignRightIcon.displayName = "AlignRightIcon";

export default AlignRightIcon;
