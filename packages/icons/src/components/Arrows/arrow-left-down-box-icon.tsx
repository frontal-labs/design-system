import type { SVGProps } from 'react';

export function ArrowLeftDownBoxIcon({
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
      aria-label="Arrow Left Down"
      aria-labelledby="Arrow Left Down"
      aria-hidden={true}
      {...props}
    >
      <path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM8 16.001V8.00098H10V12.5868L15.2929 7.29387L16.7071 8.70808L11.4142 14.001H16V16.001H8Z"/>
    </svg>
  );
}

ArrowLeftDownBoxIcon.displayName = 'ArrowLeftDownBoxIcon';

export default ArrowLeftDownBoxIcon;
