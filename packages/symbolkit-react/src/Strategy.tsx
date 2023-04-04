import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgStrategy(
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
        d="M6 20.5C7 11 11.5 8 20 6M15.909 3.81L20.395 5.9l-2.092 4.486M5 7a2 2 0 100-4 2 2 0 000 4zM16 20.243l2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121l2.122 2.122"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStrategy);
export default ForwardRef;
