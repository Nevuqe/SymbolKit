import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgRulerMinus(
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
        d="M15 5h6M11 7V2.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6h6.8a.6.6 0 00.6-.6V17m0-10H8m3 0v5m0 5v-5m0 5H8m3-5H8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRulerMinus);
export default ForwardRef;
