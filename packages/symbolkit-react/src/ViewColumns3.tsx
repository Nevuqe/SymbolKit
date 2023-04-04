import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgViewColumns3(
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
        d="M9 3H3.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H15m0-18v18"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgViewColumns3);
export default ForwardRef;
