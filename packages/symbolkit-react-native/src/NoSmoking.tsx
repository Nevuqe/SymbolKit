import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNoSmoking(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(SymbolKitContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="M18 15v3M18 11c0-1-1-2-3-2h-1a3 3 0 01-3-3V2M22 11c0-6-4-6-4-6s4 1 4-3M22 15v3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.6 18H18l-3-3H2.6a.6.6 0 00-.6.6v1.8a.6.6 0 00.6.6z"
        stroke="#000"
      />
      <Path
        d="M3 3l18 18"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNoSmoking);
export default ForwardRef;
