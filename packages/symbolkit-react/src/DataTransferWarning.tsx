import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDataTransferWarning(
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
        d="M7 4v1M7 9v1M17 12V4m0 0l3 3m-3-3l-3 3M20 16v2M20 22.01l.01-.011M7 14v6m0 0l3-3m-3 3l-3-3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDataTransferWarning);
export default ForwardRef;
