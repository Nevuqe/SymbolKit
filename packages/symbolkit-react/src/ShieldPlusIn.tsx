import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgShieldPlusIn(
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
        d="M9 12h3m0 0h3m-3 0V9m0 3v3M5 18L3.13 4.913a.996.996 0 01.774-1.114l7.662-1.703a2 2 0 01.868 0L20.096 3.8c.51.114.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShieldPlusIn);
export default ForwardRef;
