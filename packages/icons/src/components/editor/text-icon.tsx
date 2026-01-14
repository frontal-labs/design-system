import type { SVGProps } from "react";

export function TextIcon({
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
      aria-label="Text"
      aria-labelledby="Text"
      aria-hidden={true}
      {...props}
    >
      <path d="M13 6V21H11V6H5V4H19V6H13Z" />
    </svg>
  );
}

TextIcon.displayName = "TextIcon";

export default TextIcon;
