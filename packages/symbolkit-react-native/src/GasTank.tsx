import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgGasTank(
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
        clipRule="evenodd"
        d="M3 7.562A2.562 2.562 0 015.563 5H7V3h5v2h2.002A6.998 6.998 0 0121 11.998v6.442a2.562 2.562 0 01-2.563 2.562H5.563A2.565 2.565 0 013 18.44V7.562z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8.878l8 8.238-4-4.121m0 0l-4 4.12m4-4.12l4-4.121"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgGasTank);
export default ForwardRef;
