import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgOpenSelectHandGesture(
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
        d="M8 14.572l-1.823-1.736a1.558 1.558 0 00-2.212 2.194l5.942 6.338c.379.403.906.632 1.459.632H16c2.4 0 4-2 4-4V9.43"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10v-.572c0-2.285 3-2.285 3 0M14 10V8.286C14 6 17 6 17 8.286V10M11 10V7.5c0-2.286 3-2.286 3 0V10M8 14.571V3.5a1.5 1.5 0 013-.001V10"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgOpenSelectHandGesture);
export default ForwardRef;
