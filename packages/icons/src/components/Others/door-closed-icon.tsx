import type { SVGProps } from 'react';

export function DoorClosedIcon({
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
      aria-label="Door Closed"
      aria-labelledby="Door Closed"
      aria-hidden={true}
      {...props}
    >
      <path d="M2.99805 21V19H4.99805V4C4.99805 3.44772 5.44576 3 5.99805 3H17.998C18.5503 3 18.998 3.44772 18.998 4V19H20.998V21H2.99805ZM16.998 5H6.99805V19H16.998V5ZM14.998 11V13H12.998V11H14.998Z"/>
    </svg>
  );
}

DoorClosedIcon.displayName = 'DoorClosedIcon';

export default DoorClosedIcon;
