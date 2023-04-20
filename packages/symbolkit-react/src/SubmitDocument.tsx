import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSubmitDocument(
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
      <path
        d="M20 13V6.328a2 2 0 00-.586-1.414l-2.328-2.328A2 2 0 0015.672 2H6a2 2 0 00-2 2v16a2 2 0 002 2h8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2.5v2.9a.6.6 0 00.6.6h2.9M16 19h6m0 0l-3-3m3 3l-3 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSubmitDocument);
export default ForwardRef;
