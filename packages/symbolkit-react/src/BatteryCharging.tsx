import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBatteryCharging(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
          d="M1 16V8c0-1.105.943-2 2.105-2h15.79C20.058 6 21 6.895 21 8v8c0 1.105-.942 2-2.105 2H3.105C1.943 18 1 17.105 1 16z"
          stroke="#000"
        />
        <path
          d="M11.25 9l-1.158 2.778c-.03.074-.046.112-.04.141a.1.1 0 00.042.064c.026.017.066.017.146.017h2.52c.08 0 .12 0 .146.017a.1.1 0 01.042.064c.006.03-.01.067-.04.14L11.75 15"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
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
