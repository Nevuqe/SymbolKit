import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTrekking(
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
        d="M18 10l-3 1.5-4-3-1 5.5 3.5 3 .5 4.5M18 8.5v13M10 17l-2 4.5M8.5 8.5C7 9.5 6 12 6 12l2 1M12 6.5a2 2 0 100-4 2 2 0 000 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrekking);
export default ForwardRef;
