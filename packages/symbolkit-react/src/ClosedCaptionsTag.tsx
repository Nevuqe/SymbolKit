import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgClosedCaptionsTag(
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
        d="M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z"
        stroke="#000"
      />
      <path
        d="M10.5 10l-.172-.172a2.828 2.828 0 00-4.828 2v.344a2.828 2.828 0 004.828 2L10.5 14M18.5 10l-.172-.172a2.828 2.828 0 00-4.828 2v.344a2.828 2.828 0 004.828 2L18.5 14"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgClosedCaptionsTag);
export default ForwardRef;
