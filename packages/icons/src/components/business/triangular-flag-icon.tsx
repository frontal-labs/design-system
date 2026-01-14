import type { SVGProps } from "react";

export function TriangularFlagIcon({
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
      aria-label="Flag Triangular Business"
      aria-labelledby="Flag Triangular Business"
      aria-hidden={true}
      {...props}
    >
      <path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z" />
    </svg>
  );
}

TriangularFlagIcon.displayName = "TriangularFlagIcon";

export default TriangularFlagIcon;
