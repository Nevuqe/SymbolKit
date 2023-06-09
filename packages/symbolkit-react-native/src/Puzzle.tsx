import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPuzzle(
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
        d="M4 14v4.4a.6.6 0 00.6.6H10M19 14v4.4a.6.6 0 01-.6.6H14M14 5h4.4a.6.6 0 01.6.6V10M4 10V5.6a.6.6 0 01.6-.6H10M14 19v1a2 2 0 11-4 0v-1M4 10h1a2 2 0 110 4H4M19 10h1a2 2 0 110 4h-1M14 5V4a2 2 0 10-4 0v1"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPuzzle);
export default ForwardRef;
