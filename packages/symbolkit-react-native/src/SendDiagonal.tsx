import * as React from "react";
import Svg, { SvgProps, G, Path, Mask, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSendDiagonal(
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
      <G clipPath="url(#send-diagonal_svg__clip0_1_5156)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        <Mask
          id="send-diagonal_svg__a"
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
          mask="url(#send-diagonal_svg__a)"
          stroke="#000"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89" />
        </G>
      </G>
      <Defs>
        <ClipPath id="send-diagonal_svg__clip0_1_5156">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgSendDiagonal);
export default ForwardRef;
