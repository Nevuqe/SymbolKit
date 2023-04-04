import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgWindowLock(
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
        d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v8"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M13 6.01l.01-.011M16 6.01l.01-.011M19 6.01l.01-.011M21.167 18.5h.233a.6.6 0 01.6.6v2.3a.6.6 0 01-.6.6h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 01.6-.6h.233m3.334 0v-1.75c0-.583-.334-1.25-1.667-1.25s-1.667.667-1.667 1.25v1.75m3.334 0h-3.334"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgWindowLock);
export default ForwardRef;
