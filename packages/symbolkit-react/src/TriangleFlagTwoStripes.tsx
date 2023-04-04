import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTriangleFlagTwoStripes(
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
        d="M8 21v-5m0 0l9.723-6.482a.6.6 0 00-.017-1.01l-8.79-5.441a.6.6 0 00-.916.51V16zM8 11l6.5-4.476"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTriangleFlagTwoStripes);
export default ForwardRef;
