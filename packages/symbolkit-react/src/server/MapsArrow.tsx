import * as React from "react";
function SvgMapsArrow(
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
        d="M3.685 18.782l7.88-14.007a.5.5 0 01.87 0l7.88 14.007a.5.5 0 01-.617.712l-7.517-2.924a.5.5 0 00-.362 0l-7.517 2.924a.5.5 0 01-.617-.712z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMapsArrow);
export default ForwardRef;
