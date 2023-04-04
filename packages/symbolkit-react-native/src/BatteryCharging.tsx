import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBatteryCharging(
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
      <G clipPath="url(#battery-charging_svg__clip0_1_6558)">
        <Path d="M24 0H0v24h24V0z" fill="#fff" />
        <Path
          d="M1 16V8c0-1.105.943-2 2.105-2h15.79C20.058 6 21 6.895 21 8v8c0 1.105-.942 2-2.105 2H3.105C1.943 18 1 17.105 1 16z"
          stroke="#000"
        />
        <Path
          d="M11.25 9l-1.158 2.778c-.03.074-.046.112-.04.141a.1.1 0 00.042.064c.026.017.066.017.146.017h2.52c.08 0 .12 0 .146.017a.1.1 0 01.042.064c.006.03-.01.067-.04.14L11.75 15"
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
        <ClipPath id="battery-charging_svg__clip0_1_6558">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBatteryCharging);
export default ForwardRef;
