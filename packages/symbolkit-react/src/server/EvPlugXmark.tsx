import * as React from "react";
function SvgEvPlugXmark(
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
        d="M10 13.154V21M15 8.385v2.769a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.77a2 2 0 012-2h6a2 2 0 012 2zM13.333 6.385V3M6.667 6.385V3"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M15.121 21.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L15.12 17.12m2.122 2.122l2.121 2.121"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEvPlugXmark);
export default ForwardRef;
