import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSwipeTwoFingersUpGesture(
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
        d="M6.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 0V5m0 0L9 7.4M6.5 5L4 7.4M17.5 12a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 0V5m0 0L20 7.4M17.5 5L15 7.4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSwipeTwoFingersUpGesture);
export default ForwardRef;
