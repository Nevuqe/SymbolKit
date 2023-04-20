import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgArchive(
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
      <path
        d="M7 6h10M7 9h10M9 17h6"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12v0a1 1 0 00-1 1v5.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 22 4.08 22 5.2 22h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C22 20.48 22 19.92 22 18.8V13a1 1 0 00-1-1v0M3 12V5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 2 5.08 2 6.2 2h11.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 3.52 21 4.08 21 5.2V12M3 12h18"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArchive);
export default ForwardRef;
