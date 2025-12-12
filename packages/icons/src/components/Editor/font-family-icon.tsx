import type { SVGProps } from 'react';

export function FontFamilyIcon({
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
      aria-label="Font Family"
      aria-labelledby="Font Family"
      aria-hidden={true}
      {...props}
    >
      <path d="M5.55397 22H3.3999L10.9999 3H12.9999L20.5999 22H18.4458L16.0458 16H7.95397L5.55397 22ZM8.75397 14H15.2458L11.9999 5.88517L8.75397 14Z"/>
    </svg>
  );
}

FontFamilyIcon.displayName = 'FontFamilyIcon';

export default FontFamilyIcon;
