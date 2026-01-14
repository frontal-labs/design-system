import type { SVGProps } from "react";

export function File_4Icon({
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
      aria-label="File Document Paper"
      aria-labelledby="File Document Paper"
      aria-hidden={true}
      {...props}
    >
      <path d="M21 16L14.9968 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V16ZM19 15V4H5V20H14V15H19Z" />
    </svg>
  );
}

File_4Icon.displayName = "File_4Icon";

export default File_4Icon;
