import * as React from "react";
function SvgArrowReduceTag(
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
        d="M7 9.5L9.5 12 7 14.5M16.5 9.5L14 12l2.5 2.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4V9a4 4 0 014-4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowReduceTag);
export default ForwardRef;
