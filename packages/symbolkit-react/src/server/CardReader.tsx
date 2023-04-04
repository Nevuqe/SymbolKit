import * as React from "react";
function SvgCardReader(
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
      <path d="M5 19V3h14v16a2 2 0 01-2 2H7a2 2 0 01-2-2z" stroke="#000" />
      <path d="M5 6H3.5a1.5 1.5 0 110-3h17a1.5 1.5 0 010 3H19" stroke="#000" />
      <path
        d="M15 3v18"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCardReader);
export default ForwardRef;
