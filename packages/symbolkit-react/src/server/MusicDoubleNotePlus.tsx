import * as React from "react";
function SvgMusicDoubleNotePlus(
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
        d="M17 6.5h3m0 0h3m-3 0v-3m0 3v3M6 16V5l8-1M15 14v-4M12 19h1a2 2 0 002-2v-3h-3a2 2 0 00-2 2v1a2 2 0 002 2zM3 21h1a2 2 0 002-2v-3H3a2 2 0 00-2 2v1a2 2 0 002 2z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicDoubleNotePlus);
export default ForwardRef;
