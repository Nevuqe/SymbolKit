import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMultiplePagesDelete(
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
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M2.87 21.121L4.993 19m2.121-2.121L4.993 19m0 0L2.87 16.879M4.992 19l2.121 2.121M7 2h9.5L21 6.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 22h5.5a1.5 1.5 0 001.5-1.5V8.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0014.25 5H4.5A1.5 1.5 0 003 6.5V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5v3.4a.6.6 0 00.6.6H18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiplePagesDelete);
export default ForwardRef;
