import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDirectorChair(
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
        d="M19 12L5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 4h14M5 7h14" stroke="#000" strokeLinejoin="round" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDirectorChair);
export default ForwardRef;
