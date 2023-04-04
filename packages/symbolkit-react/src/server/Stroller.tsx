import * as React from "react";
function SvgStroller(
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
      <g clipPath="url(#stroller_svg__clip0_1_5624)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="stroller_svg__a"
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
          mask="url(#stroller_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.5 3a8.5 8.5 0 00-7.212 13M18.712 16A8.46 8.46 0 0020 11.5v-2h2.5M8 21a2 2 0 110-4 2 2 0 010 4zM15 21a2 2 0 110-4 2 2 0 010 4zM11.5 3v9M3.5 12h16" />
        </g>
      </g>
      <defs>
        <clipPath id="stroller_svg__clip0_1_5624">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStroller);
export default ForwardRef;
