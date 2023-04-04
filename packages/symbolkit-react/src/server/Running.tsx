import * as React from "react";
function SvgRunning(
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
        d="M15 7a2 2 0 100-4 2 2 0 000 4zM12.613 8.267l-3.308 4.135 4.135 4.135-2.067 4.549"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41 9.507L9.797 6.2l2.816 2.068 2.895 3.308h3.722M8.892 15.71l-1.241.827H4.343"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRunning);
export default ForwardRef;
