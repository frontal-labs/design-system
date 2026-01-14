import type { SVGProps } from "react";

export function SingleQuotesLIcon({
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
      aria-label="Single Quote Quote Left Quote"
      aria-labelledby="Single Quote Quote Left Quote"
      aria-hidden={true}
      {...props}
    >
      <path d="M9.58341 17.3211C8.55316 16.2274 8 15 8 13.0103C8 9.51086 10.4565 6.37366 14.0306 4.82318L14.9233 6.20079C11.588 8.00539 10.9362 10.346 10.6756 11.822C11.2126 11.5443 11.9156 11.4466 12.6047 11.5105C14.4091 11.6778 15.8312 13.159 15.8312 15C15.8312 16.933 14.2642 18.5 12.3312 18.5C11.2581 18.5 10.232 18.0095 9.58341 17.3211Z" />
    </svg>
  );
}

SingleQuotesLIcon.displayName = "SingleQuotesLIcon";

export default SingleQuotesLIcon;
