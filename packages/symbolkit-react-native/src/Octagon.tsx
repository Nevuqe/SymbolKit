import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgOctagon(
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
      <G clipPath="url(#octagon_svg__clip0_1_4161)">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        <Path
          d="M11.77 1.095a.6.6 0 01.46 0l7.319 3.032a.6.6 0 01.324.324l3.032 7.32a.6.6 0 010 .458l-3.032 7.32a.6.6 0 01-.324.324l-7.32 3.032a.6.6 0 01-.459 0l-7.319-3.032a.6.6 0 01-.324-.325L1.095 12.23a.6.6 0 010-.46l3.032-7.319a.6.6 0 01.324-.324l7.32-3.032z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="octagon_svg__clip0_1_4161">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgOctagon);
export default ForwardRef;
