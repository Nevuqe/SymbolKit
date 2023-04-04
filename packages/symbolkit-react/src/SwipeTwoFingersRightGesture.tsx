import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSwipeTwoFingersRightGesture(
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
        d="M12 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm0 0h7m0 0L16.6 4M19 6.5L16.6 9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSwipeTwoFingersRightGesture);
export default ForwardRef;
