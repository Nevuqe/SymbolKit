import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFrameTool(
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
        d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1M18 6.6v10.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V6.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFrameTool);
export default ForwardRef;
