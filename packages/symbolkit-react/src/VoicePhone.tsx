import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgVoicePhone(
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
        d="M8 17.01l.01-.011M8 5H3.6a.6.6 0 00-.6.6v14.8a.6.6 0 00.6.6h8.8a.6.6 0 00.6-.6V16M16 3v10M13 5v6M22 7v2M10 7v2M19 4v8"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgVoicePhone);
export default ForwardRef;
