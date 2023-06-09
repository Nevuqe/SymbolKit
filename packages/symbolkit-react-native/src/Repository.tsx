import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgRepository(
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
        d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M15 17v5l2.5-1.6L20 22v-5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M6 17h14" stroke="#000" strokeLinecap="round" />
      <Path
        d="M6 17a2 2 0 100 4h5.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgRepository);
export default ForwardRef;
