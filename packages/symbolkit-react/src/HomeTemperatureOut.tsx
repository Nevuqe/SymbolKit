import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHomeTemperatureOut(
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
        d="M14 8L4.311 3.156a.6.6 0 00-.6.037L2.5 4M12 11v8a2 2 0 01-2 2H7m0 0H3.6a.6.6 0 01-.6-.6v-4.8a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6V21zM19 18a2 2 0 100-4 2 2 0 000 4zM19 7.5V14M19 12h2M19 9h2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHomeTemperatureOut);
export default ForwardRef;
