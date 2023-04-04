import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNetworkAlt(
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
        d="M9.4 22H3.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6zM14.9 7H9.1a.6.6 0 01-.6-.6V2.6a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6zM20.4 22h-5.8a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h5.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6z"
        stroke="#000"
      />
      <path
        d="M6.5 17v-3.5a2 2 0 012-2h7a2 2 0 012 2V17M12 11.5V7"
        stroke="#000"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkAlt);
export default ForwardRef;
