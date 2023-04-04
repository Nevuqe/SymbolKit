import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPillow(
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
        d="M21.04 12.283l.599 4.19a2 2 0 01-2.179 2.273L12.2 18.02a2.005 2.005 0 00-.398 0l-7.261.726a2 2 0 01-2.179-2.273l.599-4.19a2 2 0 000-.566l-.599-4.19A2 2 0 014.54 5.254l7.261.726a2 2 0 00.398 0l7.261-.726a2 2 0 012.179 2.273l-.599 4.19a2 2 0 000 .566zM21 6l-4 3M7 15l-4 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPillow);
export default ForwardRef;
