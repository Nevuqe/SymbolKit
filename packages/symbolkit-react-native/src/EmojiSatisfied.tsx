import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEmojiSatisfied(
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
        d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmojiSatisfied);
export default ForwardRef;
