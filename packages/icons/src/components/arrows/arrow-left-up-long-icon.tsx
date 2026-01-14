import type { SVGProps } from "react";

export function ArrowLeftUpLongIcon({
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
      aria-label="Arrow Left Up"
      aria-labelledby="Arrow Left Up"
      aria-hidden={true}
      {...props}
    >
      <path d="M19.7784 18.3641L18.3644 19.7783L6.92908 8.34305V13.9288H4.92908L4.92908 4.9288L13.9291 4.9288L13.9291 6.9288L8.34326 6.9288L19.7784 18.3641Z" />
    </svg>
  );
}

ArrowLeftUpLongIcon.displayName = "ArrowLeftUpLongIcon";

export default ArrowLeftUpLongIcon;
