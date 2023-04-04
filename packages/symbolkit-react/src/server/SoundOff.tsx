import * as React from "react";
function SvgSoundOff(
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
      <g clipPath="url(#sound-off_svg__clip0_1_5509)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="sound-off_svg__a"
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
        <g mask="url(#sound-off_svg__a)" stroke="#000" strokeWidth={1.5}>
          <path
            d="M18 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M2 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H4a2 2 0 01-2-2z" />
        </g>
      </g>
      <defs>
        <clipPath id="sound-off_svg__clip0_1_5509">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoundOff);
export default ForwardRef;
