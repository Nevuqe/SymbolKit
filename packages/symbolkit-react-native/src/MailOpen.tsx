import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMailOpen(
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
        d="M7 12l5 3.5 5-3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 20V9.132a2 2 0 01.971-1.715l8-4.8a2 2 0 012.058 0l8 4.8A2 2 0 0122 9.132V20a2 2 0 01-2 2H4a2 2 0 01-2-2z"
        stroke="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMailOpen);
export default ForwardRef;
