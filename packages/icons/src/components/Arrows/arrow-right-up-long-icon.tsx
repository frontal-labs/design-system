import type { SVGProps } from 'react';

export function ArrowRightUpLongIcon({
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
      aria-label="Arrow Right Up Long"
      aria-labelledby="Arrow Right Up Long"
      aria-hidden={true}
      {...props}
    >
      <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"/>
    </svg>
  );
}

ArrowRightUpLongIcon.displayName = 'ArrowRightUpLongIcon';

export default ArrowRightUpLongIcon;
