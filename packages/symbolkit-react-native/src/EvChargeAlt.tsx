import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEvChargeAlt(
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
        d="M22 5l-2 4-2-4M16 5h-2v4h2M14 7h1.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 9v10a2 2 0 002 2h9a2 2 0 002-2v-5M9 5.6V7a2 2 0 01-2 2H5a2 2 0 01-2-2V5.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6zM4 5V3M8 5V3"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgEvChargeAlt);
export default ForwardRef;
