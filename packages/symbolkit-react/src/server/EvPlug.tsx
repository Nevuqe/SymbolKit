import * as React from "react";
function SvgEvPlug(
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
        d="M12 13.154V21M17 8.385v2.769a2 2 0 01-2 2H9a2 2 0 01-2-2v-2.77a2 2 0 012-2h6a2 2 0 012 2zM15.333 6.385V3M8.667 6.385V3"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEvPlug);
export default ForwardRef;
