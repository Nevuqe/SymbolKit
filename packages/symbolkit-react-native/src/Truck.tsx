import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTruck(
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
        d="M7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z"
        stroke="#000"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 17V6.6a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.05M14 17H9.05M14 9h5.61a.6.6 0 01.548.356l1.79 4.028a.6.6 0 01.052.243V16.4a.6.6 0 01-.6.6h-1.9M14 17h1"
        stroke="#000"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTruck);
export default ForwardRef;
