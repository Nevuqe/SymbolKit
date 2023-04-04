import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgLensPlus(
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
        d="M2.992 6h3m0 0h3m-3 0V3m0 3v3M2.112 13.5C2.835 18.311 6.987 22 12 22c5.523 0 10-4.477 10-10 0-5.013-3.689-9.164-8.5-9.888M17.197 9c-.1-.172-.207-.34-.323-.5M17.811 13.5a6.01 6.01 0 01-4.311 4.311"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgLensPlus);
export default ForwardRef;
