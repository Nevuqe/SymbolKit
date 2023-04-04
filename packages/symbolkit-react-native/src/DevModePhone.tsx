import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDevModePhone(
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
        d="M12 19.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 18v3.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V18M18 6V2.6a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V6"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M15.5 8.5L19 12l-3.5 3.5M8.5 8.5L5 12l3.5 3.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDevModePhone);
export default ForwardRef;
