import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgFavouriteWindow(
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
      <Path
        d="M13 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v8"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M22 17.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.823-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.233 0l.106.107.106-.107A2.277 2.277 0 0122 17.28z"
        stroke="#000"
        strokeLinejoin="round"
      />
      <Path
        d="M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgFavouriteWindow);
export default ForwardRef;
