import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgLaptopFix(
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
        d="M20.8 14.222H3.654a.6.6 0 00-.578.437L1.72 19.456A2 2 0 003.644 22h16.712a2 2 0 001.924-2.544l-1.48-5.234zm0 0v-6.11M3.2 14.222V4a2 2 0 012-2H12M11 19h2M17.657 4.828l-2.829 2.829M20.485 4.828A2 2 0 1117.657 2M14.828 10.485A2 2 0 0012 7.657"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgLaptopFix);
export default ForwardRef;
