import type { SVGProps } from 'react';

export function H_1Icon({
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
      aria-label="Heading Text Editor"
      aria-labelledby="Heading Text Editor"
      aria-hidden={true}
      {...props}
    >
      <path d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM21.0005 8V20H19.0005L19 10.204L17 10.74V8.67L19.5005 8H21.0005Z"/>
    </svg>
  );
}

H_1Icon.displayName = 'H_1Icon';

export default H_1Icon;
