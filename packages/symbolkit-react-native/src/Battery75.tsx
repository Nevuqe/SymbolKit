import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";
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
          d="M23.75 10v4a.75.75 0 01-.5.707V9.293c.291.103.5.38.5.707z"
          stroke="#000"
        />
        <Rect
          x={2}
          y={6}
          width={20}
          height={12}
          rx={3}
          stroke="#000"
          strokeWidth={1.5}
        />
        <Path
          d="M3 10.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 7 5.08 7 6.2 7h8.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C18 8.52 18 9.08 18 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C16.48 17 15.92 17 14.8 17H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 15.48 3 14.92 3 13.8v-3.6z"
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
