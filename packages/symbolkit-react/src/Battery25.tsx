import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBattery25(
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
      <g clipPath="url(#battery-25_svg__clip0_1_6553)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
        <rect x={3} y={7} width={7} height={10} rx={2} fill="#000" />
        <path
          d="M23.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
        <rect
          x={2}
          y={6}
          width={20}
          height={12}
          rx={3}
          stroke="#000"
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <clipPath id="battery-25_svg__clip0_1_6553">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery25);
export default ForwardRef;
