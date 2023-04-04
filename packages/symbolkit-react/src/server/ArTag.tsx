import * as React from "react";
function SvgArTag(
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
        d="M2 15V9a6 6 0 016-6h8a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6z"
        stroke="#000"
      />
      <path
        d="M13 15.5v-2.8m0 0V8.5h2.857c.714 0 2.143 0 2.143 2.1s-1.429 2.1-2.143 2.1M13 12.7h2.857m0 0L18 15.5M11 15.5L9.929 13m0 0L8 8.5 6.071 13m3.858 0H6.07M5 15.5L6.071 13"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArTag);
export default ForwardRef;
