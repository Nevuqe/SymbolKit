import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgLightBulb(
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
        d="M9 18h6M10 21h4M9 15c.001-2-.499-2.5-1.5-3.5-1-1-1.476-2.013-1.5-3.5-.047-3.05 2-5 6-5 4.001 0 6.049 1.95 6 5-.023 1.487-.5 2.5-1.5 3.5-.999 1-1.499 1.5-1.5 3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLightBulb);
export default ForwardRef;
