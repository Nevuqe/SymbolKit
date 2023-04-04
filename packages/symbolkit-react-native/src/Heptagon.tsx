import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHeptagon(
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
      <G clipPath="url(#heptagon_svg__clip0_1_3138)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        <Path
          d="M11.74 1.625a.6.6 0 01.52 0l8.08 3.891a.6.6 0 01.324.407l1.996 8.743a.6.6 0 01-.116.508l-5.591 7.01a.6.6 0 01-.47.227H7.517a.6.6 0 01-.469-.226l-5.591-7.011a.6.6 0 01-.116-.508l1.996-8.743a.6.6 0 01.324-.407l8.08-3.89z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="heptagon_svg__clip0_1_3138">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeptagon);
export default ForwardRef;
