import * as React from "react";
function SvgSwitchOff(
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
        d="M7 13a1 1 0 100-2 1 1 0 000 2z"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 17H7A5 5 0 017 7h10a5 5 0 010 10z" stroke="#000" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSwitchOff);
export default ForwardRef;
