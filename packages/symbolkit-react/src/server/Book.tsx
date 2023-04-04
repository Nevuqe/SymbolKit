import * as React from "react";
function SvgBook(
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
        d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114M6 17h14M6 21h14"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M6 21a2 2 0 110-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 7h6" stroke="#000" strokeLinecap="round" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBook);
export default ForwardRef;
