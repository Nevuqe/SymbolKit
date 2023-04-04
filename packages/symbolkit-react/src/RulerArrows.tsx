import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgRulerArrows(
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
        d="M15.4 22H8.6a.6.6 0 01-.6-.6V2.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6zM16 17h-3M16 7h-3M13 12h10m0 0l-2 2m2-2l-2-2M1 12l2-2m-2 2l2 2m-2-2h7"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRulerArrows);
export default ForwardRef;
