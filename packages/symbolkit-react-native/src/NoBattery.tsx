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
          d="M3 3l18 18M5.737 6H3.105C1.943 6 1 6.895 1 8v8c0 1.105.943 2 2.105 2h15.263M21 14.5V8c0-1.105-.942-2-2.105-2h-6.842"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
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
