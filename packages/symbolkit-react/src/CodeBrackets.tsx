import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgCodeBrackets(
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
        d="M9 21H8c-1.105 0-2-.894-2-1.999V14c0-1-1.5-2-1.5-2S6 11 6 10V5a2 2 0 012-2h1M15 21h1c1.105 0 2-.894 2-1.999V14c0-1 1.5-2 1.5-2S18 11 18 10V5a2 2 0 00-2-2h-1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCodeBrackets);
export default ForwardRef;
