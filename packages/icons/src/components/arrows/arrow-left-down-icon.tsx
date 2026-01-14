import type { SVGProps } from "react";

export function ArrowLeftDownIcon({
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
      aria-label="Arrow Left Down"
      aria-labelledby="Arrow Left Down"
      aria-hidden={true}
      {...props}
    >
      <path d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z" />
    </svg>
  );
}

ArrowLeftDownIcon.displayName = "ArrowLeftDownIcon";

export default ArrowLeftDownIcon;
