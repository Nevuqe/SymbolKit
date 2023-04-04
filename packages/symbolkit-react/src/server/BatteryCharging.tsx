import * as React from "react";
function SvgBatteryCharging(
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
      <g clipPath="url(#battery-charging_svg__clip0_1_6558)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
        <path
          d="M10.833 9l-.777 2.797c-.019.07-.028.104-.02.13a.1.1 0 00.043.058c.024.015.06.015.131.015h1.58c.071 0 .107 0 .13.015a.1.1 0 01.044.057c.008.027-.001.062-.02.13L11.167 15"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
        <rect
          x={1}
          y={6}
          width={20}
          height={12}
          rx={3}
          stroke="#000"
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <clipPath id="battery-charging_svg__clip0_1_6558">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBatteryCharging);
export default ForwardRef;
