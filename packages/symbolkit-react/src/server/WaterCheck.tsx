import * as React from "react";
function SvgWaterCheck(
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
      <g clipPath="url(#water-check_svg__clip0_1_6347)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="water-check_svg__a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <path d="M24 0H0v24h24V0z" fill="#fff" />
        </mask>
        <g
          mask="url(#water-check_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 21.57A8.132 8.132 0 016.25 7.75l5.326-5.326a.6.6 0 01.848 0L17.75 7.75A8.131 8.131 0 0119.74 16M16 20l2 2 4-4" />
        </g>
      </g>
      <defs>
        <clipPath id="water-check_svg__clip0_1_6347">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWaterCheck);
export default ForwardRef;
