import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgOpenInBrowser(
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
        d="M8 21h12.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6V16M10 6h8M6 6h1M3.5 20.5L12 12m0 0v4m0-4H8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgOpenInBrowser);
export default ForwardRef;
