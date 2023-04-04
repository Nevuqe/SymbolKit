import * as React from "react";
function SvgSpockHandGesture(
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
        d="M18 7.5l.919.153a2 2 0 011.623 2.407l-.528 2.376a.602.602 0 00-.014.13V17.5c0 2-1.6 4-4 4H9.42a2 2 0 01-1.519-.698l-4.548-5.307a1.582 1.582 0 012.392-2.072L8 16v-3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5l-.79.132a2 2 0 00-1.595 2.522L8 12.5M11 12.5L8.923 4.606a1.514 1.514 0 112.928-.77L14 12M17 12.5l1-5 .247-1.485a1.536 1.536 0 00-3.024-.535L14 12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSpockHandGesture);
export default ForwardRef;
