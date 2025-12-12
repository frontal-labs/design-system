import type { SVGProps } from 'react';

export function CrossIcon({
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
      aria-label="Cross"
      aria-labelledby="Cross"
      aria-hidden={true}
      {...props}
    >
      <path d="M9 2H15V7H20V13H15V22H9V13H4V7H9V2ZM11 4V9H6V11H11V20H13V11H18V9H13V4H11Z"/>
    </svg>
  );
}

CrossIcon.displayName = 'CrossIcon';

export default CrossIcon;
