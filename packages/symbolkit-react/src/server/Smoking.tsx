import * as React from "react";
function SvgSmoking(
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
        d="M18 19v3M18 16c0-1-1-2-3-2h-1a3 3 0 01-3-3V8.5A2.5 2.5 0 0113.5 6h.5M22 16c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4M22 19v3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4 19H2.6a.6.6 0 00-.6.6v1.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6v-1.8a.6.6 0 00-.6-.6z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSmoking);
export default ForwardRef;
