import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgElectronicsChip(
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
        d="M7 19.4V4.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6zM14 20v2.5M10 20v2.5M14 4V1.5M10 4V1.5M7 12H4.5M19.5 12H17M7 6.5H4.5M19.5 6.5H17M7 17.5H4.5M19.5 17.5H17"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgElectronicsChip);
export default ForwardRef;
