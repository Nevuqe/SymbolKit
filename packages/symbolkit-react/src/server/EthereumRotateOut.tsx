import * as React from "react";
function SvgEthereumRotateOut(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8h3.4a.6.6 0 00.6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05 16h-3.4a.6.6 0 00-.6.6V20M7 12l5 7 5-7M7 12l5-7m-5 7l5 1m5-1l-5-7m5 7l-5 1m0-8v8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEthereumRotateOut);
export default ForwardRef;
