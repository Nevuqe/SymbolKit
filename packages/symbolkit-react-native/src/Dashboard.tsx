import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDashboard(
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
        d="M15 15.8c0-1.767-3-4.8-3-4.8s-3 3.033-3 4.8 1.343 3.2 3 3.2 3-1.433 3-3.2z"
        stroke="#000"
      />
      <Path
        d="M12 4v4M3.5 7.5l3 3M17.5 10.5l3-3M2 17h4M18 17h4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDashboard);
export default ForwardRef;
