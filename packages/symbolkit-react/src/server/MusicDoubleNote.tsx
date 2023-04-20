import * as React from "react";
function SvgMusicDoubleNote(
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
        d="M20 14V4.917c0-.658 0-.988-.135-1.22a1 1 0 00-.526-.44c-.253-.09-.577-.032-1.225.086l-7.8 1.418c-.468.085-.701.128-.876.247a1 1 0 00-.352.421C9 5.623 9 5.86 9 6.335V16"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16.5V14h-2.5c-.465 0-.697 0-.89.038a2 2 0 00-1.572 1.572c-.038.193-.038.425-.038.89s0 .697.038.89a2 2 0 001.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 001.572-1.572c.038-.193.038-.425.038-.89zM9 18.5V16H6.5c-.465 0-.697 0-.89.038a2 2 0 00-1.572 1.572C4 17.803 4 18.035 4 18.5s0 .697.038.89a2 2 0 001.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 001.572-1.572C9 19.197 9 18.965 9 18.5z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicDoubleNote);
export default ForwardRef;
