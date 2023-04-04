import * as React from "react";
function SvgPenConnectBluetooth(
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
      <g clipPath="url(#pen-connect-bluetooth_svg__clip0_1_4394)">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <mask
          id="pen-connect-bluetooth_svg__a"
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
          mask="url(#pen-connect-bluetooth_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 17.5l-1 4 3.731-.933a1 1 0 00.465-.263L21.5 8.5a2.121 2.121 0 00-3-3l-4 4M17.5 6.5l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1" />
        </g>
      </g>
      <defs>
        <clipPath id="pen-connect-bluetooth_svg__clip0_1_4394">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPenConnectBluetooth);
export default ForwardRef;
