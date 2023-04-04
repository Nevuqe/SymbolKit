import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgShieldAlt(
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
        d="M3.571 8l-.44-3.084A1 1 0 013.904 3.8l7.662-1.703a2 2 0 01.868 0L20.096 3.8a1 1 0 01.773 1.117L20.43 8M3.57 8H20.43M3.57 8c.309 2.16.69 4.822 1 7M20.43 8c-.309 2.16-.69 4.822-1 7M4.57 15L5 18c.07.495.5 3.5 7 3.5s6.93-3.005 7-3.5l.429-3M4.57 15H19.43"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShieldAlt);
export default ForwardRef;
