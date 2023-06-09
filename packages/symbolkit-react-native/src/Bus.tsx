import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBus(
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
        d="M7 16.01l.01-.011M17 16.01l.01-.011M3 12h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zM21 8V6a4 4 0 00-4-4H7a4 4 0 00-4 4v2M7 8h10"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 20v1.9a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V20M15.5 20v1.9a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V20"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBus);
export default ForwardRef;
