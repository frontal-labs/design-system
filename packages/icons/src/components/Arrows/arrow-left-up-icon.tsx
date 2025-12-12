import type { SVGProps } from 'react';

export function ArrowLeftUpIcon({
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
      aria-label="Arrow Left Up"
      aria-labelledby="Arrow Left Up"
      aria-hidden={true}
      {...props}
    >
      <path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z"/>
    </svg>
  );
}

ArrowLeftUpIcon.displayName = 'ArrowLeftUpIcon';

export default ArrowLeftUpIcon;
