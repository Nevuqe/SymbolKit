import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBicycle(
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
        d="M5 19a4 4 0 100-8 4 4 0 000 8zM8.5 7.5h6m0 0h.5l4 7.5m-4.5-7.5l2-3m0 0H14m2.5 0h2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15l3.5-7.5L12 14h3M8.5 7.5c-.333-1-1.5-3-3.5-3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19a4 4 0 100-8 4 4 0 000 8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBicycle);
export default ForwardRef;
