import * as React from "react";
function SvgUserXmark(
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
      <g clipPath="url(#user-xmark_svg__clip0_1_6148)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="user-xmark_svg__a"
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
          mask="url(#user-xmark_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18.621 12.121L20.743 10m0 0l2.121-2.121M20.743 10L18.62 7.879M20.743 10l2.121 2.121M1 20v-1a7 7 0 1114 0v1" />
          <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" />
        </g>
      </g>
      <defs>
        <clipPath id="user-xmark_svg__clip0_1_6148">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUserXmark);
export default ForwardRef;
