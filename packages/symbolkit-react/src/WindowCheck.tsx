import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgWindowCheck(
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
        d="M13 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011M16 20l2 2 4-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWindowCheck);
export default ForwardRef;
