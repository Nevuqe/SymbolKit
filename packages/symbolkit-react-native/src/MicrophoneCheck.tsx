import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMicrophoneCheck(
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
        d="M15.5 20.5l2 2 5-5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M11 5a3 3 0 00-6 0v6a3 3 0 106 0V5z" stroke="#000" />
      <Path
        d="M1 10v1a7 7 0 1014 0v-1M8 18v4m0 0H5m3 0h3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMicrophoneCheck);
export default ForwardRef;
