import * as React from "react";
function SvgBattery75(
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
      <g clipPath="url(#battery-75_svg__clip0_1_6572)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
        <path
          d="M1 16V8c0-1.105.943-2 2.105-2h15.79C20.058 6 21 6.895 21 8v8c0 1.105-.942 2-2.105 2H3.105C1.943 18 1 17.105 1 16z"
          stroke="#000"
        />
        <path
          d="M3 9.6c0-.56 0-.84.118-1.054.104-.188.27-.341.474-.437C3.823 8 4.127 8 4.733 8h9.534c.606 0 .91 0 1.142.109.203.096.37.249.473.437C16 8.76 16 9.04 16 9.6v4.8c0 .56 0 .84-.118 1.054-.104.188-.27.341-.473.437-.232.109-.536.109-1.142.109H4.733c-.606 0-.91 0-1.141-.109a1.045 1.045 0 01-.474-.437C3 15.24 3 14.96 3 14.4V9.6z"
          fill="#000"
        />
        <path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
      </g>
      <defs>
        <clipPath id="battery-75_svg__clip0_1_6572">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery75);
export default ForwardRef;
