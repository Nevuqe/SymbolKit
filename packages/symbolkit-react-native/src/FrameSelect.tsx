import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFrameSelect(
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
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="M4.998 2H2v2.998h2.998V2zM4.999 3.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998V19zM21.997 2.002H19V5h2.998V2.002zM21.997 19.002H19V22h2.998v-2.998z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.997 15.002l-3-7 7 3-2.998.999-1.002 3.001z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.999 12.002l2.998 3"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgFrameSelect);
export default ForwardRef;
