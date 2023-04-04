import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBusStop(
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
        d="M16 16.01l.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6h-2zM16 20H2.6a.6.6 0 01-.6-.6v-6.8a.6.6 0 01.6-.6H16M14 8H6m8-6H6a4 4 0 00-4 4v2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 20v1.9a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V20M14.5 20v1.9a.6.6 0 00.6.6h.9"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBusStop);
export default ForwardRef;
