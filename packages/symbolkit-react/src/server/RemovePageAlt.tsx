import * as React from "react";
function SvgRemovePageAlt(
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
      <path
        d="M4 12V4a2 2 0 012-2h9.672a2 2 0 011.414.586l2.328 2.328A2 2 0 0120 6.328V20a2 2 0 01-2 2h-7"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2.5v2.9a.6.6 0 00.6.6h2.9M1.992 19h6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRemovePageAlt);
export default ForwardRef;
