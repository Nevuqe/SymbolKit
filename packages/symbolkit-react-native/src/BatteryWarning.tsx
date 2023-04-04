import * as React from "react";
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBatteryWarning(
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
      <G clipPath="url(#battery-warning_svg__clip0_1_6582)">
        <Path d="M24 0H0v24h24V0z" fill="#fff" />
        <Path
          d="M12 9v3M12 15.011l.01-.011"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
      </G>
      <Defs>
        <ClipPath id="battery-warning_svg__clip0_1_6582">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBatteryWarning);
export default ForwardRef;
