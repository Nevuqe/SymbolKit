import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTestTube(
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
        d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426 1.966-1.065-6.553-4.588-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507zM16.091 11.02c-2.876-.853-4.403.78-7.28-.071"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTestTube);
export default ForwardRef;
