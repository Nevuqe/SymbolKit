import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTransitionLeft(
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
        d="M22 18V6a3 3 0 00-3-3h-2a3 3 0 00-3 3v12a3 3 0 003 3h2a3 3 0 003-3z"
        stroke="#000"
      />
      <path
        d="M8 3H6a4 4 0 00-4 4v10a4 4 0 004 4h2M14 12H6m0 0l3-3m-3 3l3 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTransitionLeft);
export default ForwardRef;
