import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFolderWarning(
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
        d="M18 3v4M18 11.01l.01-.011M22 7v12.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V11"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7h-1.278a.6.6 0 01-.39-.144L9.168 4.144A.6.6 0 008.778 4H2.6a.6.6 0 00-.6.6V11h12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFolderWarning);
export default ForwardRef;
