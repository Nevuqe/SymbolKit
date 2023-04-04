import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";
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
          d="M10.833 9l-.777 2.797c-.019.07-.028.104-.02.13a.1.1 0 00.043.058c.024.015.06.015.131.015h1.58c.071 0 .107 0 .13.015a.1.1 0 01.044.057c.008.027-.001.062-.02.13L11.167 15"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
        <Rect
          x={1}
          y={6}
          width={20}
          height={12}
          rx={3}
          stroke="#000"
          strokeWidth={1.5}
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
