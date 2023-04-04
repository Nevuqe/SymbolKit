import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDroneChargeHalf(
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
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        d="M14.25 14.75l.25-2.25.426-3.834A.6.6 0 0014.33 8H9.67a.6.6 0 00-.596.666l.867 7.8a.6.6 0 00.596.534H11"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M4.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 4.5L9 8M4.5 19.5l5-4M19.5 4.5L15 8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 19v2M15 19v2M17 19v2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 22.4v-4.8a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-6.8a.6.6 0 01-.6-.6z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDroneChargeHalf);
export default ForwardRef;
