import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgOpenBook(
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
        d="M12 21V7a2 2 0 012-2h7.4a.6.6 0 01.6.6v13.114M12 21V7a2 2 0 00-2-2H2.6a.6.6 0 00-.6.6v13.114M14 19h8M10 19H2"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M12 21a2 2 0 012-2M12 21a2 2 0 00-2-2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgOpenBook);
export default ForwardRef;
