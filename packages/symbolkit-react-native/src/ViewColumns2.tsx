import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgViewColumns2(
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
        d="M12 3h8.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H12m0-18H3.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H12m0-18v18"
        stroke="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgViewColumns2);
export default ForwardRef;
