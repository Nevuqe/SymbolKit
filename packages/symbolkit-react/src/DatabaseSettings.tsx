import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDatabaseSettings(
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
        d="M4 6v6s0 3 7 3 7-3 7-3V6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3zM11 21c-7 0-7-3-7-3v-6M19 21a2 2 0 100-4 2 2 0 000 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 22a3 3 0 100-6 3 3 0 000 6z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0.3 2"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseSettings);
export default ForwardRef;
