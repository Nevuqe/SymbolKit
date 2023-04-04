import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgTranslate(
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
        d="M2 5h7m0 0h4.5M9 5V3m7 2h-2.5m0 0c-.82 2.735-2.539 5.32-4.5 7.593m0 0C7.376 14.474 5.585 16.14 4 17.5m5-4.907C8 11.5 6.4 9.3 6 8.5m3 4.093l3 2.907M13.5 21l1.143-3m0 0l2.857-7.5 2.857 7.5m-5.714 0h5.714m1.143 3l-1.143-3"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgTranslate);
export default ForwardRef;
