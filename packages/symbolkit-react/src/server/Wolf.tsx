import * as React from "react";
function SvgWolf(
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
        d="M5.812 7s-.453.628-.996 1.667m0 0C4.006 10.214 3 12.674 3 15.333 5.813 15.333 7.5 17 7.5 17s1.125 5 4.5 5 4.5-5 4.5-5 1.688-1.667 4.5-1.667c0-2.659-1.007-5.119-1.816-6.666m-14.368 0S1.875 6.444 4.816 2c.996.556 3.809 2.778 3.809 2.778S10.313 3.667 12 3.667c1.688 0 3.375 1.11 3.375 1.11S18.188 2.557 19.313 2c2.812 4.445-.128 6.667-.128 6.667M18.188 7s.453.628.997 1.667M11 18h1m0 0h1m-1 0v1M8.5 12.5L10 14M15.5 12.5L14 14"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWolf);
export default ForwardRef;
