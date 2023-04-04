import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgIndustry(
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
        d="M18 10c0-1-1-2-3-2h-1a3 3 0 01-3-3V2M18 21h3v-9h-3v4.5m0 4.5v-4.5m0 4.5H3v-4l3.5-3 4 2.5 4-2.5 3.5 2.5M21 10c0-6-4-6-4-6s4 .5 4-2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgIndustry);
export default ForwardRef;
