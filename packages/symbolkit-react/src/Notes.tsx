import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNotes(
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
        d="M8 14h8M8 10h2M8 18h4M10 3H6a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-3.5M10 3V1m0 2v2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNotes);
export default ForwardRef;
