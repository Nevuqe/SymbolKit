import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgHeadsetCharge(
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
        d="M12.5 13L10 17h4l-2.5 4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 17.439v-1.877a2 2 0 011.515-1.94L4 13.5l1.254-.314a.6.6 0 01.746.582v5.464a.6.6 0 01-.746.582l-1.74-.435A2 2 0 012 17.439zM22 17.439v-1.877a2 2 0 00-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 00-.745.582v5.464a.6.6 0 00.745.582l1.74-.435A2 2 0 0022 17.439z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgHeadsetCharge);
export default ForwardRef;
