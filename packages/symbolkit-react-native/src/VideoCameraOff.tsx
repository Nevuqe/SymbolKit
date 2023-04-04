import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgVideoCameraOff(
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
        d="M6.5 7H3.6a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6V15m-3.5-8h2.9a.6.6 0 01.6.6v3.119a.6.6 0 00.984.46l4.032-3.359a.6.6 0 01.984.461V15.5M3 3l18 18"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgVideoCameraOff);
export default ForwardRef;
