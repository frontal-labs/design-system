import type { SVGProps } from 'react';

export function SquareRootIcon({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-label="Math Root Square Root"
      aria-labelledby="Math Root Square Root"
      aria-hidden={true}
      {...props}
    >
      <path d="M15.382 4H22V6H16.618L9 21.2361L5.38197 14H2V12H6.61803L9 16.7639L15.382 4Z"/>
    </svg>
  );
}

SquareRootIcon.displayName = 'SquareRootIcon';

export default SquareRootIcon;
