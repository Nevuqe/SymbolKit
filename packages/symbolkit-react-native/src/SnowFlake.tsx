import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgSnowFlake(
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
        d="M3 7l3.5 2m0 0l5.5 3M6.5 9L3 10m3.5-1L6 5.5M21 17l-3.5-2m0 0L12 12m5.5 3l.5 3.5m-.5-3.5l3.5-1m-9-2l-5.5 3m5.5-3V5m0 7v6.5m0-6.5l5.5-3m-11 6L3 17m3.5-2L3 14m3.5 1L6 18.5M12 5V2m0 3L9.5 4M12 5l2.5-1M12 18.5V22m0-3.5l2.5 1.5M12 18.5L9.5 20m8-11L21 7m-3.5 2l3.5 1m-3.5-1l.5-3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgSnowFlake);
export default ForwardRef;
