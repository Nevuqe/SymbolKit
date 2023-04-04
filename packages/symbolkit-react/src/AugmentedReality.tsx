import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgAugmentedReality(
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
        d="M5.5 15.5l.614-1.718m0 0L8 8.5l1.886 5.282m-3.772 0h3.772M10.5 15.5l-.614-1.718M13 15.5v-2.8m0 0V8.5h2.857c.714 0 2.143 0 2.143 2.1s-1.429 2.1-2.143 2.1M13 12.7h2.857m0 0L18 15.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18.4V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAugmentedReality);
export default ForwardRef;
