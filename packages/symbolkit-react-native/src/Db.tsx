import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDb(
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
      <Path d="M5 12v6s0 3 7 3 7-3 7-3v-6" stroke="#000" />
      <Path d="M5 6v6s0 3 7 3 7-3 7-3V6" stroke="#000" />
      <Path d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3z" stroke="#000" />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDb);
export default ForwardRef;
