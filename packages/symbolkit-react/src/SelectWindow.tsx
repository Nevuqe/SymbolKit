import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSelectWindow(
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
        d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M22.082 18.365c.494.304.464 1.043-.045 1.1l-2.566.292-1.152 2.312c-.228.458-.933.234-1.05-.334l-1.255-6.116c-.098-.48.333-.782.75-.525l5.318 3.271z"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSelectWindow);
export default ForwardRef;
