import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBbq(
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
        d="M8.5 14.5L5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2M12 6s1-1.061 1-2c0-1.333-1-2-1-2M16 6s1-1.061 1-2c0-1.333-1-2-1-2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.5 17.5h-9" stroke="#000" strokeLinejoin="round" />
      <path
        d="M15.5 14.5l2.1 4.5M18.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15a7 7 0 006.975-6.4.563.563 0 00-.575-.6H5.6a.563.563 0 00-.575.6A7 7 0 0012 15z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBbq);
export default ForwardRef;
