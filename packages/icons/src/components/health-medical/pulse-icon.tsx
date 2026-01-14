import type { SVGProps } from "react";

export function PulseIcon({
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
      aria-label="Pulse Heartbeat Waveform"
      aria-labelledby="Pulse Heartbeat Waveform"
      aria-hidden={true}
      {...props}
    >
      <path d="M9 7.53861L15 21.5386L18.6594 13H23V11H17.3406L15 16.4614L9 2.46143L5.3406 11H1V13H6.6594L9 7.53861Z" />
    </svg>
  );
}

PulseIcon.displayName = "PulseIcon";

export default PulseIcon;
