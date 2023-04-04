import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgCornerTopRight(
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
        d="M20.01 16.01l-.01-.011M20.01 20.01l-.01-.011M16.01 20.01l-.01-.011M12.01 20.01l-.01-.011M8.01 20.01L8 19.999M4.01 20.01L4 19.999M4.01 16.01L4 15.999M4.01 12.01L4 11.999M4.01 8.01L4 7.999M4.01 4.01L4 3.999M8.01 4.01L8 3.999M20.01 12V4h-8v8h8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgCornerTopRight);
export default ForwardRef;
