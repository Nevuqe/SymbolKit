import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHistoricShield(
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
        d="M4 15.528V2.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v12.928a4 4 0 01-2.211 3.578l-5.52 2.76a.6.6 0 01-.537 0l-5.52-2.76A4 4 0 014 15.528z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHistoricShield);
export default ForwardRef;
