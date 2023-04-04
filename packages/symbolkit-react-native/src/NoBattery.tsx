import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNoBattery(
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
      <G clipPath="url(#no-battery_svg__clip0_1_6588)">
        <Path d="M24 0H0v24h24V0z" fill="#fff" />
        <Path
          d="M3 3l18 18M22 10v4M5.5 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14.5m2.5-3.5V8a2 2 0 00-2-2h-6.5"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="no-battery_svg__clip0_1_6588">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNoBattery);
export default ForwardRef;
