import type { SVGProps } from 'react';

export function AlignTopIcon({
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
      aria-label="Align Top Arrow"
      aria-labelledby="Align Top Arrow"
      aria-hidden={true}
      {...props}
    >
      <path d="M3 3H21V5H3V3ZM8 11V21H6V11H3L7 7L11 11H8ZM18 11V21H16V11H13L17 7L21 11H18Z"/>
    </svg>
  );
}

AlignTopIcon.displayName = 'AlignTopIcon';

export default AlignTopIcon;
