import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgNumberedListRight(
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
        d="M3 5h12M20.5 7V3L19 4.5M21 14h-2l1.905-2.963a.428.428 0 00.072-.323C20.92 10.456 20.716 10 20 10c-1 0-1 .889-1 .889v.222M19.5 19h.5a1 1 0 110 2h-1M19 17h2l-1.5 2M3 12h12M3 19h12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumberedListRight);
export default ForwardRef;
