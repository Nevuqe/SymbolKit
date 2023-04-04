import * as React from "react";
function SvgEmojiPuzzled(
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 15.5s1.5-2 4.5-2 4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0 0 1.967-2 1.64-2 4M5 11.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 9a.5.5 0 110-1 .5.5 0 010 1zM10.5 9a.5.5 0 110-1 .5.5 0 010 1z"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmojiPuzzled);
export default ForwardRef;
