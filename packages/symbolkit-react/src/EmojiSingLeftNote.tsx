import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEmojiSingLeftNote(
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
      <path d="M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="#000" />
      <path
        d="M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 0V3.6a.6.6 0 01.6-.6H5"
        stroke="#000"
        strokeLinecap="round"
      />
      <path
        d="M8 17a2 2 0 100-4 2 2 0 000 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a9.966 9.966 0 00-4 .832"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 100-1 .5.5 0 000 1z"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmojiSingLeftNote);
export default ForwardRef;
