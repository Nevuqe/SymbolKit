import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEmojiLookRight(
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
        d="M15.5 9a.5.5 0 100-1 .5.5 0 000 1z"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.542 15A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c4.478 0 8.268-2.943 9.542-7zm0 0H17"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmojiLookRight);
export default ForwardRef;
