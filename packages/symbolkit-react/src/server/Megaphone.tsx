import * as React from "react";
function SvgMegaphone(
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
        d="M14 14V6m0 8l6.102 3.487a.6.6 0 00.898-.52V3.033a.6.6 0 00-.898-.521L14 6m0 8H7a4 4 0 010-8h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 01-3.92.56z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMegaphone);
export default ForwardRef;
