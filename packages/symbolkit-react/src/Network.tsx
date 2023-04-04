import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNetwork(
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
        d="M9.4 2H3.6a.6.6 0 00-.6.6v3.8a.6.6 0 00.6.6h5.8a.6.6 0 00.6-.6V2.6a.6.6 0 00-.6-.6zM14.9 17H9.1a.6.6 0 00-.6.6v3.8a.6.6 0 00.6.6h5.8a.6.6 0 00.6-.6v-3.8a.6.6 0 00-.6-.6zM20.4 2h-5.8a.6.6 0 00-.6.6v3.8a.6.6 0 00.6.6h5.8a.6.6 0 00.6-.6V2.6a.6.6 0 00-.6-.6zM6.5 7v3.5a2 2 0 002 2h7a2 2 0 002-2V7M12 12.5V17"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetwork);
export default ForwardRef;
