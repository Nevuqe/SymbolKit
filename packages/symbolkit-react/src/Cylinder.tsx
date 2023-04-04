import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgCylinder(
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
        d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3zM12 16c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3z"
        stroke="#000"
      />
      <path
        d="M20 5v14M4 5v14"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCylinder);
export default ForwardRef;
