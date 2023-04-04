import * as React from "react";
function SvgMouseButtonRight(
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
        d="M4 10v4a8 8 0 1016 0V9a7 7 0 00-7-7h-1a8 8 0 00-8 8z"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M12 2v6.4a.6.6 0 00.6.6H20"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMouseButtonRight);
export default ForwardRef;
