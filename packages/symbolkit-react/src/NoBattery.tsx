import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNoBattery(
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
      <g clipPath="url(#no-battery_svg__clip0_1_6588)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
        <path
          d="M3 3l18 18M22 10v4M5.5 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14.5m2.5-3.5V8a2 2 0 00-2-2h-6.5"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="no-battery_svg__clip0_1_6588">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNoBattery);
export default ForwardRef;
