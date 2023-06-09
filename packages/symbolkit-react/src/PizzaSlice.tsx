import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPizzaSlice(
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
        d="M14 9.01l.01-.011M8 8.01l.01-.011M8 14.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 19L2.236 3.004a.6.6 0 01.754-.713L19 7" stroke="#000" />
      <path
        d="M22.198 8.425a1.75 1.75 0 00-3.396-.85c-.391 1.568-1.9 4.049-4.227 6.375-2.3 2.301-5.148 4.194-7.968 4.845a1.75 1.75 0 10.787 3.41c3.68-.849 7.082-3.206 9.656-5.78 2.549-2.549 4.54-5.568 5.148-8z"
        stroke="#000"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPizzaSlice);
export default ForwardRef;
