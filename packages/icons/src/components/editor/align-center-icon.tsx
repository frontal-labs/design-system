import type { SVGProps } from "react";

export function AlignCenterIcon({
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
      aria-label="Align Center Horizontal"
      aria-labelledby="Align Center Horizontal"
      aria-hidden={true}
      {...props}
    >
      <path d="M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z" />
    </svg>
  );
}

AlignCenterIcon.displayName = "AlignCenterIcon";

export default AlignCenterIcon;
