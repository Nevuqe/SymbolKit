import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBattery50(
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
      <G clipPath="url(#battery-50_svg__clip0_1_6548)">
        <Path d="M24 0H0v24h24V0z" fill="#fff" />
        <Path
          d="M1 16V8c0-1.105.943-2 2.105-2h15.79C20.058 6 21 6.895 21 8v8c0 1.105-.942 2-2.105 2H3.105C1.943 18 1 17.105 1 16z"
          stroke="#000"
        />
        <Path
          d="M3 9.6c0-.56 0-.84.125-1.054.11-.188.284-.341.499-.437C3.868 8 4.189 8 4.829 8H9.17c.64 0 .96 0 1.205.109.215.096.39.249.5.437C11 8.76 11 9.04 11 9.6v4.8c0 .56 0 .84-.125 1.054-.11.188-.284.341-.499.437-.244.109-.565.109-1.205.109H4.83c-.64 0-.96 0-1.205-.109a1.082 1.082 0 01-.5-.437C3 15.24 3 14.96 3 14.4V9.6z"
          fill="#000"
        />
        <Path
          d="M22.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
      </G>
      <Defs>
        <ClipPath id="battery-50_svg__clip0_1_6548">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery50);
export default ForwardRef;
