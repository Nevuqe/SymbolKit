import * as React from "react";
function SvgLayoutRight(
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
        d="M20.4 3H3.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6zM14.25 9.75V21M21 9.75H3"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLayoutRight);
export default ForwardRef;
