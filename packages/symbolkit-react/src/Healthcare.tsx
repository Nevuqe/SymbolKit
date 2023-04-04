import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHealthcare(
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
        d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5a1.5 1.5 0 00-3 0V15"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 16l.858-.858a.484.484 0 00-.126-.776l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5a1.5 1.5 0 113 0V15"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16l-.858-.858a.485.485 0 01.126-.776l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20M13.667 12h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333V12z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHealthcare);
export default ForwardRef;
