import type { SVGProps } from 'react';

export function FontMonoIcon({
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
      aria-label="Font Mono"
      aria-labelledby="Font Mono"
      aria-hidden={true}
      {...props}
    >
      <path d="M6 4H19V6H8V12H18V14H8V21H6V4Z"/>
    </svg>
  );
}

FontMonoIcon.displayName = 'FontMonoIcon';

export default FontMonoIcon;
