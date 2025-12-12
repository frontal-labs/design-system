import type { SVGProps } from 'react';

export function TwitchIcon({
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
      aria-label="Twitch Streaming Video Games"
      aria-labelledby="Twitch Streaming Video Games"
      aria-hidden={true}
      {...props}
    >
      <path d="M4.30098 3H21.001V14.7L16.301 19.4H12.401L9.90098 21.8H7.00098V19.4H3.00098V6.2L4.30098 3ZM5.00098 17.4H9.00098V19.8H9.09636L11.5964 17.4H15.4725L19.001 13.8716V5H5.00098V17.4ZM15.001 8H17.001V12.7H15.001V8ZM15.001 8H17.001V12.7H15.001V8ZM10.001 8H12.001V12.7H10.001V8Z"/>
    </svg>
  );
}

TwitchIcon.displayName = 'TwitchIcon';

export default TwitchIcon;
