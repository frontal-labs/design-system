import type { SVGProps } from 'react';

export function NumbersIcon({
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
      aria-label="Numbers Digit Numeric"
      aria-labelledby="Numbers Digit Numeric"
      aria-hidden={true}
      {...props}
    >
      <path d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z"/>
    </svg>
  );
}

NumbersIcon.displayName = 'NumbersIcon';

export default NumbersIcon;
