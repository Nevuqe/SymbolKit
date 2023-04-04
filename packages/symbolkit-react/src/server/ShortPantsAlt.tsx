import * as React from "react";
function SvgShortPantsAlt(
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
        d="M12 16.8h6.966a.6.6 0 00.596-.53l1.36-11.6a.6.6 0 00-.596-.67H3.659a.6.6 0 00-.598.656l1.388 14.8a.6.6 0 00.597.544H11.4a.6.6 0 00.6-.6V12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShortPantsAlt);
export default ForwardRef;
