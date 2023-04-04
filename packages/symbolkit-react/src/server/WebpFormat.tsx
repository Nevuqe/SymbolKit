import * as React from "react";
function SvgWebpFormat(
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
        d="M4 6V3.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6V6M4 18v2.4a.6.6 0 00.6.6h14.8a.6.6 0 00.6-.6V18"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M13.5 15V9h2.4a.6.6 0 01.6.6v.9A1.5 1.5 0 0115 12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15h2.4a.6.6 0 00.6-.6v-.9A1.5 1.5 0 0015 12h-1.5M19.5 15v-3m0 0V9h3v3h-3zM1.5 9v6L3 12l1.5 3V9M10.5 9h-3v6h3M7.5 12h2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWebpFormat);
export default ForwardRef;
