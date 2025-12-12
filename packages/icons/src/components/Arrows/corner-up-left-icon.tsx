import type { SVGProps } from 'react';

export function CornerUpLeftIcon({
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
      aria-label="Arrow Up Left"
      aria-labelledby="Arrow Up Left"
      aria-hidden={true}
      {...props}
    >
      <path d="M19.0001 10.0001L19.0003 19L17.0003 19L17.0002 12.0001L6.82833 12L10.7781 15.9498L9.36384 17.364L2.99988 11L9.36384 4.63605L10.7781 6.05026L6.82828 10L19.0001 10.0001Z"/>
    </svg>
  );
}

CornerUpLeftIcon.displayName = 'CornerUpLeftIcon';

export default CornerUpLeftIcon;
