import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFridge(
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
        d="M10 14H9M10 6H9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 10V2.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6V10M5 10v11.4a.6.6 0 00.6.6h12.8a.6.6 0 00.6-.6V10M5 10h14"
        stroke="#000"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgFridge);
export default ForwardRef;
