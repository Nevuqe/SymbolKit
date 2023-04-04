import * as React from "react";
function SvgPauseWindow(
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
        d="M16 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v9"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M19 17v5M22 17v5M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPauseWindow);
export default ForwardRef;
