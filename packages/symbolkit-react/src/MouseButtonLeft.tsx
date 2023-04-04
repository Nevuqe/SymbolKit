import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMouseButtonLeft(
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
        d="M20 10v4a8 8 0 11-16 0V9a7 7 0 017-7h1a8 8 0 018 8z"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M12 2v6.4a.6.6 0 01-.6.6H4"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMouseButtonLeft);
export default ForwardRef;
