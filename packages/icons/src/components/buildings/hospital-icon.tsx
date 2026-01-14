import type { SVGProps } from "react";

export function HospitalIcon({
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
      aria-label="Hospital Medical Building"
      aria-labelledby="Hospital Medical Building"
      aria-hidden={true}
      {...props}
    >
      <path d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z" />
    </svg>
  );
}

HospitalIcon.displayName = "HospitalIcon";

export default HospitalIcon;
