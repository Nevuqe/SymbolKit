import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHeadsetHelp(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M20 11a8 8 0 10-16 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15.438v-1.876a2 2 0 011.515-1.94l1.74-.436a.6.6 0 01.745.582v5.463a.6.6 0 01-.746.583l-1.74-.435A2 2 0 012 15.439zM22 15.438v-1.876a2 2 0 00-1.515-1.94l-1.74-.436a.6.6 0 00-.745.582v5.463a.6.6 0 00.745.583l1.74-.435A2 2 0 0022 15.439zM20 18v.5a2 2 0 01-2 2h-3.5"
        stroke="currentColor"
      />
      <Path
        d="M13.5 22h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 010 3z"
        stroke="currentColor"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeadsetHelp);
export default ForwardRef;
