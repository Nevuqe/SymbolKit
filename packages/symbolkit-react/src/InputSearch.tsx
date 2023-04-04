import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgInputSearch(
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
        d="M21 12v-2a5 5 0 00-5-5H8a5 5 0 000 10h4M20.124 19.119a3 3 0 10-4.248-4.237 3 3 0 004.248 4.237zm0 0L22 21"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgInputSearch);
export default ForwardRef;
