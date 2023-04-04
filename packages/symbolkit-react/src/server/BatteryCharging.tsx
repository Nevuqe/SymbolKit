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
          d="M22 10v4"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 16V8a2 2 0 012-2h15a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2z"
          stroke="#000"
        />
        <path
          d="M10.25 9l-.788 1.892c-.155.37-.232.556-.203.705a.5.5 0 00.213.319c.126.084.327.084.728.084h.6c.401 0 .602 0 .728.084a.5.5 0 01.213.32c.029.148-.048.333-.202.704L10.75 15"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
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
