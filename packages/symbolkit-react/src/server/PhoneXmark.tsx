import * as React from "react";
function SvgPhoneXmark(
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
      <g clipPath="url(#phone-xmark_svg__clip0_1_4490)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="phone-xmark_svg__a"
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
          mask="url(#phone-xmark_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.121 7.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 3.12m2.122 2.122l2.121 2.121M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" />
        </g>
      </g>
      <defs>
        <clipPath id="phone-xmark_svg__clip0_1_4490">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPhoneXmark);
export default ForwardRef;
