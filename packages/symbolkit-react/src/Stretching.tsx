import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgStretching(
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
        d="M16 7a2 2 0 100-4 2 2 0 000 4zM5 20l4.91-.524 2.726-5.238L13.727 9l-4.909 1.048 1.636 2.095M14.818 15.286H17V20"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStretching);
export default ForwardRef;
