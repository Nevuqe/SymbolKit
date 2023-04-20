import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgComputer(
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
        d="M2 21h15M21 21h1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.78V6.22c0-1.139 0-1.708.225-2.142a2 2 0 01.853-.853C3.512 3 4.081 3 5.22 3h13.56c1.139 0 1.708 0 2.142.225a2 2 0 01.853.853C22 4.512 22 5.081 22 6.22v7.56c0 1.139 0 1.709-.225 2.142a2 2 0 01-.853.853C20.488 17 19.919 17 18.78 17H5.22c-1.139 0-1.708 0-2.142-.225a2 2 0 01-.853-.853C2 15.488 2 14.919 2 13.78z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgComputer);
export default ForwardRef;
