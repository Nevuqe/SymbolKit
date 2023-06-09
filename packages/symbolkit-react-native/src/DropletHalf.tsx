import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDropletHalf(
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
        d="M4.5 16.5l14-6.5M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1016 0z"
        stroke="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDropletHalf);
export default ForwardRef;
