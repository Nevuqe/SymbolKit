import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMoreHoriz(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M20 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 12.5a.5.5 0 100-1 .5.5 0 000 1zM4 12.5a.5.5 0 100-1 .5.5 0 000 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMoreHoriz);
export default ForwardRef;
