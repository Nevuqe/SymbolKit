import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEvStation(
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
        d="M21 5v4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 19V9a2 2 0 012-2h9a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2z"
        stroke="#000"
      />
      <Path d="M5 10V5a2 2 0 012-2h9a2 2 0 012 2v5" stroke="#000" />
      <Path
        d="M11.167 11L9.5 14h4l-1.667 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgEvStation);
export default ForwardRef;
