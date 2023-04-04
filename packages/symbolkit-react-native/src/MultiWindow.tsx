import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMultiWindow(
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
        d="M7 19v-8a2 2 0 012-2h11a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z"
        stroke="#000"
      />
      <Path
        d="M6.5 16H4a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v3"
        stroke="#000"
      />
      <Path
        d="M10 12h1M5 7h1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiWindow);
export default ForwardRef;
