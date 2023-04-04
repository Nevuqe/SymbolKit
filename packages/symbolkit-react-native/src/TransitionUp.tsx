import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTransitionUp(
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
        d="M18 22H6a3 3 0 01-3-3v-2a3 3 0 013-3h12a3 3 0 013 3v2a3 3 0 01-3 3z"
        stroke="#000"
      />
      <Path
        d="M3 8V6a4 4 0 014-4h10a4 4 0 014 4v2M12 14V6m0 0L9 9m3-3l3 3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTransitionUp);
export default ForwardRef;
