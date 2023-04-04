import * as React from "react";
function SvgCloset(
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
        d="M9 14H8M16 14h-1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2h8.4a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H12m0-20H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H12m0-20v20"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCloset);
export default ForwardRef;
