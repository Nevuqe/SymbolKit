import * as React from "react";
function SvgTree(
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
        d="M12 22v-8m0 0v-4m0 4l4-2M17 7A5 5 0 007 7M12 18H7.5a5.5 5.5 0 110-11H9M12 18h4.5A5.5 5.5 0 0017 7.022"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTree);
export default ForwardRef;
