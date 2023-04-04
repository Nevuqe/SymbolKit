import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMicrophoneSpeaking(
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
      <path d="M15 5a3 3 0 10-6 0v6a3 3 0 106 0V5z" stroke="#000" />
      <path
        d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 1014 0v-1M12 18v4m0 0H9m3 0h3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicrophoneSpeaking);
export default ForwardRef;
