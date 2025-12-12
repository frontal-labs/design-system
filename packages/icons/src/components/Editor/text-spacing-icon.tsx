import type { SVGProps } from 'react';

export function TextSpacingIcon({
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
      aria-label="Text Spacing Alignment"
      aria-labelledby="Text Spacing Alignment"
      aria-hidden={true}
      {...props}
    >
      <path d="M7 17H17V14.5L20.5 18L17 21.5V19H7V21.5L3.5 18L7 14.5V17ZM13 6V15H11V6H5V4H19V6H13Z"/>
    </svg>
  );
}

TextSpacingIcon.displayName = 'TextSpacingIcon';

export default TextSpacingIcon;
