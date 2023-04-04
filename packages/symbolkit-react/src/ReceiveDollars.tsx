import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgReceiveDollars(
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
        d="M10 8.23c-.8-.737-2.207-1.25-3.5-1.282m0 0c-1.539-.038-2.917.604-2.917 2.36 0 3.23 6.417 1.615 6.417 4.846 0 1.842-1.708 2.634-3.5 2.575m0-9.781V5M3 15.23c.752.926 2.15 1.454 3.5 1.499m0 0V19M21 12h-8m0 0l3.84-4M13 12l3.84 4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReceiveDollars);
export default ForwardRef;
