import type { SVGProps } from 'react';

export function ListCheckVariantIcon({
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
      aria-label="List Check Variant"
      aria-labelledby="List Check Variant"
      aria-hidden={true}
      {...props}
    >
      <path d="M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z"/>
    </svg>
  );
}

ListCheckVariantIcon.displayName = 'ListCheckVariantIcon';

export default ListCheckVariantIcon;
