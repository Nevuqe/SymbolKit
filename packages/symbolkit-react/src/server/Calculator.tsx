import * as React from "react";
function SvgCalculator(
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
      <g clipPath="url(#calculator_svg__clip0_1_1147)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          d="M1 21V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2z"
          stroke="#000"
        />
        <path
          d="M15 7h4M15 15.5h4M15 18.5h4M5 7h2m0 0h2M7 7V5m0 2v2M5.586 18.414L7 17m0 0l1.415-1.414M7 17l-1.414-1.414M7 17l1.415 1.414"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="calculator_svg__clip0_1_1147">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCalculator);
export default ForwardRef;
