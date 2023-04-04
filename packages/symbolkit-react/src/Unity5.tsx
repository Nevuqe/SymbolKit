import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgUnity5(
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
        d="M11.672 20.786a.6.6 0 00.656 0l9.284-6.062a.6.6 0 00.24-.694L18.285 3.41A.6.6 0 0017.716 3H6.221a.6.6 0 00-.57.412l-3.506 10.62a.6.6 0 00.241.69l9.286 6.064z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6H10l-.5 5a3 3 0 110 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUnity5);
export default ForwardRef;
