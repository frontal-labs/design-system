import type { SVGProps } from "react";

export function HeadingIcon({
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
      aria-label="Heading"
      aria-labelledby="Heading"
      aria-hidden={true}
      {...props}
    >
      <path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
    </svg>
  );
}

HeadingIcon.displayName = "HeadingIcon";

export default HeadingIcon;
