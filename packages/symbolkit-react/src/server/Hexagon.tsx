import * as React from "react";
function SvgHexagon(
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
        d="M11.7 1.173a.6.6 0 01.6 0l8.926 5.154a.6.6 0 01.3.52v10.307a.6.6 0 01-.3.52L12.3 22.826a.6.6 0 01-.6 0l-8.926-5.154a.6.6 0 01-.3-.52V6.847a.6.6 0 01.3-.52L11.7 1.174z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHexagon);
export default ForwardRef;
