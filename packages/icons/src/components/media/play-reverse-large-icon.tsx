import type { SVGProps } from "react";

export function PlayReverseLargeIcon({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-label="Play Reverse Media"
      aria-labelledby="Play Reverse Media"
      aria-hidden={true}
      {...props}
    >
      <path d="M16 18.3915V5.60846L5.77359 12L16 18.3915ZM18 3.80421V20.1957C18 20.9812 17.136 21.46 16.47 21.0437L3.3568 12.848C2.73013 12.4563 2.73013 11.5436 3.3568 11.152L16.47 2.95621C17.1361 2.53993 18 3.01878 18 3.80421Z" />
    </svg>
  );
}

PlayReverseLargeIcon.displayName = "PlayReverseLargeIcon";

export default PlayReverseLargeIcon;
