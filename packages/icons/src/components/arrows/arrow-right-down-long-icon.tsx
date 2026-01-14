import type { SVGProps } from "react";

export function ArrowRightDownLongIcon({
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
      aria-label="Arrow Right Down"
      aria-labelledby="Arrow Right Down"
      aria-hidden={true}
      {...props}
    >
      <path d="M4.2216 5.63589L5.63562 4.22168L17.0709 15.6569V10.0712H19.0709L19.0709 19.0712L10.0709 19.0712L10.0709 17.0712L15.6567 17.0712L4.2216 5.63589Z" />
    </svg>
  );
}

ArrowRightDownLongIcon.displayName = "ArrowRightDownLongIcon";

export default ArrowRightDownLongIcon;
