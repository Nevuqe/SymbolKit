import * as React from "react";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgForward(
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
        d="M2.956 5.704A.6.6 0 002 6.187v11.626a.6.6 0 00.956.483l7.889-5.813a.6.6 0 000-.966l-7.89-5.813zM13.956 5.704a.6.6 0 00-.956.483v11.626a.6.6 0 00.956.483l7.889-5.813a.6.6 0 000-.966l-7.89-5.813z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgForward);
export default ForwardRef;
