import * as React from "react";
function SvgReminderHandGesture(
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
        d="M17.5 12l2.004 2.672a2 2 0 01-.126 2.551l-3.784 4.128a1.998 1.998 0 01-1.473.649H9.5c-2.358 0-3.622-2.575-3.982-3.93a.55.55 0 01-.018-.143V9.428c0-2.285 3-2.285 3 0V10"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 10V8.286c0-2.286-3-2.286-3 0V10M14.5 10V7.5c0-2.286-3-2.286-3 0V10M14.5 10V7.5 3.499a1.5 1.5 0 113 .001V15"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.563 6.5h2.062C20.5 6.5 21 6.078 21 5.25 21 4.422 20.5 4 19.625 4H12.25C11.56 4 11 4.56 11 5.25v.25a1 1 0 001 1"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReminderHandGesture);
export default ForwardRef;
