import * as React from "react";
function SvgMicrophoneMinus(
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
        d="M16.992 19h6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 5a3 3 0 00-6 0v6a3 3 0 106 0V5z" stroke="#000" />
      <path
        d="M1 10v1a7 7 0 1014 0v-1M8 18v4m0 0H5m3 0h3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicrophoneMinus);
export default ForwardRef;
