import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFontQuestion(
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
        d="M3.469 18.374l1.064-2.341m0 0l4.258-9.368 4.258 9.367m-8.516 0h8.516m1.064 2.342l-1.064-2.341M15.178 8.794c0-3.725 5.854-3.725 5.854 0 0 2.661-2.66 2.13-2.66 5.322M18.371 18.385l.01-.012"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgFontQuestion);
export default ForwardRef;
