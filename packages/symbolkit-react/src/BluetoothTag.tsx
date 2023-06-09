import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBluetoothTag(
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
        d="M9 9.6l6 5.1-3.143 3.3V6L15 9.3l-6 5.1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15V9a6 6 0 016-6h8a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBluetoothTag);
export default ForwardRef;
