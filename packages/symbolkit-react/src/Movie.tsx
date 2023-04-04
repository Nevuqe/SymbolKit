import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMovie(
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
        d="M7 8.01l.01-.011M17 8.01l.01-.011M7 12.01l.01-.011M17 12.01l.01-.011M7 16.01l.01-.011M17 16.01l.01-.011M7 2H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H7M7 2v2m0-2h10M7 22h10M7 22v-2M17 2h3.4a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H17m0-20v2m0 18v-2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMovie);
export default ForwardRef;
