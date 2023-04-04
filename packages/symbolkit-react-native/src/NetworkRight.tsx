import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNetworkRight(
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
        d="M22 14.6v5.8a.6.6 0 01-.6.6h-3.8a.6.6 0 01-.6-.6v-5.8a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6zM7 9.1v5.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6V9.1a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6zM22 3.6v5.8a.6.6 0 01-.6.6h-3.8a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6z"
        stroke="#000"
      />
      <Path
        d="M17 17.5h-3.5a2 2 0 01-2-2v-7a2 2 0 012-2H17M11.5 12H7"
        stroke="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkRight);
export default ForwardRef;
