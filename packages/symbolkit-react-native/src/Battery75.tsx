import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBattery75(
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
      <G clipPath="url(#battery-75_svg__clip0_1_6572)">
        <Path d="M24 0H0v24h24V0z" fill="#fff" />
        <Path
          d="M22 10v4"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 16V8a2 2 0 012-2h15a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2z"
          stroke="#000"
        />
        <Path
          d="M3 9.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C3.76 8 4.04 8 4.6 8h8.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C15 8.76 15 9.04 15 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437C14.24 16 13.96 16 13.4 16H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 15.24 3 14.96 3 14.4V9.6z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="battery-75_svg__clip0_1_6572">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBattery75);
export default ForwardRef;
