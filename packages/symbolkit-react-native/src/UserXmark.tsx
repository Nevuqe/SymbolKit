import * as React from "react";
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgUserXmark(
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
      <G clipPath="url(#user-xmark_svg__clip0_1_6148)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        <Mask
          id="user-xmark_svg__a"
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
          mask="url(#user-xmark_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M18.621 12.121L20.743 10m0 0l2.121-2.121M20.743 10L18.62 7.879M20.743 10l2.121 2.121M1 20v-1a7 7 0 1114 0v1" />
          <Path d="M8 12a4 4 0 100-8 4 4 0 000 8z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="user-xmark_svg__clip0_1_6148">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgUserXmark);
export default ForwardRef;
