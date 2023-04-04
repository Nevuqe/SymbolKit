import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMap(
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
        d="M9 19l-5.21 1.737a.6.6 0 01-.79-.57V5.433a.6.6 0 01.41-.569L9 3m0 16l6 2m-6-2V3m0 0l6 2m0 16l5.59-1.863a.6.6 0 00.41-.57V3.832a.6.6 0 00-.79-.569L15 5m0 16V5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMap);
export default ForwardRef;
