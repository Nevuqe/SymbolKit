import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSkateboard(
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
        d="M6.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 9l3.333 1h13.334L22 9M17.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSkateboard);
export default ForwardRef;
