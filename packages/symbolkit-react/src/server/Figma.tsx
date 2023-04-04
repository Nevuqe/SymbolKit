import * as React from "react";
function SvgFigma(
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
        d="M6 6a3 3 0 013-3h3v6H9a3 3 0 01-3-3zM12 3h3a3 3 0 010 6h-3V3z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12a3 3 0 116 0 3 3 0 01-6 0zM6 18a3 3 0 013-3h3v3a3 3 0 01-6 0zM6 12a3 3 0 013-3h3v6H9a3 3 0 01-3-3z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFigma);
export default ForwardRef;
