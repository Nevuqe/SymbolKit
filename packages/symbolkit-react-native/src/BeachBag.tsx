import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgBeachBag(
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
        d="M2.77 13l-.633-3.287A.6.6 0 012.727 9h18.547a.6.6 0 01.589.713L21.23 13M2.769 13h18.462M2.769 13l.616 4m17.846-4l-.616 4m-17.23 0l.537 3.491a.6.6 0 00.593.509h14.97a.6.6 0 00.593-.509L20.615 17m-17.23 0h17.23"
        stroke="#000"
      />
      <Path d="M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4" stroke="#000" />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgBeachBag);
export default ForwardRef;
