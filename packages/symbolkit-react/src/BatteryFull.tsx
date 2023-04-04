import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBatteryFull(
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
      <g clipPath="url(#battery-full_svg__clip0_1_6567)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
        <path
          d="M1 16V8c0-1.105.943-2 2.105-2h15.79C20.058 6 21 6.895 21 8v8c0 1.105-.942 2-2.105 2H3.105C1.943 18 1 17.105 1 16z"
          stroke="#000"
        />
        <path
          d="M3 9.6c0-.56 0-.84.116-1.054.103-.188.266-.341.466-.437C3.811 8 4.11 8 4.707 8h12.586c.598 0 .896 0 1.125.109.2.096.364.249.466.437C19 8.76 19 9.04 19 9.6v4.8c0 .56 0 .84-.116 1.054a1.035 1.035 0 01-.466.437c-.229.109-.527.109-1.125.109H4.707c-.598 0-.896 0-1.125-.109a1.036 1.036 0 01-.466-.437C3 15.24 3 14.96 3 14.4V9.6z"
          fill="#000"
        />
        <path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
      </g>
      <defs>
        <clipPath id="battery-full_svg__clip0_1_6567">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBatteryFull);
export default ForwardRef;
