import * as React from "react";
function SvgDrag(
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
        d="M12 12L4 4m0 0v4m0-4h4M12 12l8-8m0 0v4m0-4h-4M12 12l-8 8m0 0v-4m0 4h4M12 12l8 8m0 0v-4m0 4h-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDrag);
export default ForwardRef;
