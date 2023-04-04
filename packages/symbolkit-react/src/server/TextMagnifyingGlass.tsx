import * as React from "react";
function SvgTextMagnifyingGlass(
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
        d="M19.5 19.5L21 21M14 17a3 3 0 106 0 3 3 0 00-6 0zM9 5v12m0 0H7m2 0h2M15 7V5H3v2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTextMagnifyingGlass);
export default ForwardRef;
