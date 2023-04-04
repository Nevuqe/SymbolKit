import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBattery50(
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
      <g clipPath="url(#battery-50_svg__clip0_1_6548)">
        <path d="M24 0H0v24h24V0z" fill="#fff" />
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
        <path
          d="M3 10.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 7 5.08 7 6.2 7h3.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C13 8.52 13 9.08 13 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C11.48 17 10.92 17 9.8 17H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 15.48 3 14.92 3 13.8v-3.6z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="battery-50_svg__clip0_1_6548">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery50);
export default ForwardRef;
