import * as React from "react";
function SvgDatabaseScriptPlus(
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
        d="M22 14V8.5M6 13V6a3 3 0 013-3h5M16.992 4h3m0 0h3m-3 0V1m0 3v3M12 21H6a4 4 0 010-8h12a4 4 0 104 4v-3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseScriptPlus);
export default ForwardRef;
