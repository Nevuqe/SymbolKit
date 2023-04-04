import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMapsTurnLeft(
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
        d="M4.365 19.787l7.303-6.492a.5.5 0 01.664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.383a.498.498 0 00-.19 0l-7.113 1.383c-.499.098-.808-.526-.427-.864zM5 6.5h3s4 0 4 4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9L5 6.5 8.5 4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMapsTurnLeft);
export default ForwardRef;
