import * as React from "react";
function SvgGitCherryPickCommit(
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
        d="M17 11v-1a2 2 0 00-2-2h-3m0 0H9a2 2 0 00-2 2v1m5-3V4M12 20a3 3 0 100-6 3 3 0 000 6zM9 17H3M15 17h6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGitCherryPickCommit);
export default ForwardRef;
