import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTools(
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
        d="M10.05 10.607l-7.07 7.07a2 2 0 102.828 2.83l7.07-7.072M17.193 13.8l3.878 3.878a2 2 0 11-2.828 2.828l-6.209-6.208M6.733 5.904L4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782l-.707 2.122zm0 0l2.83 2.83"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718 1.74-1.74 4.95-2.121 6.717-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTools);
export default ForwardRef;
