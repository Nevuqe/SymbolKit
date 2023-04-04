import * as React from "react";
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgPenConnectBluetooth(
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
      <G clipPath="url(#pen-connect-bluetooth_svg__clip0_1_4394)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        <Mask
          id="pen-connect-bluetooth_svg__a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <Path d="M24 0H0v24h24V0z" fill="#fff" />
        </Mask>
        <G
          mask="url(#pen-connect-bluetooth_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M6.5 17.5l-1 4 3.731-.933a1 1 0 00.465-.263L21.5 8.5a2.121 2.121 0 00-3-3l-4 4M17.5 6.5l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1" />
        </G>
      </G>
      <Defs>
        <ClipPath id="pen-connect-bluetooth_svg__clip0_1_4394">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPenConnectBluetooth);
export default ForwardRef;
