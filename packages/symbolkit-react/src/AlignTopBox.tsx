import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgAlignTopBox(
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
        d="M4 16l.01-.011M4 20l.01-.011M8 20l.01-.011M12 20l.01-.011M16 20l.01-.011M20 20l.01-.011M20 16l.01-.011M4 12V4h16v8H4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlignTopBox);
export default ForwardRef;
