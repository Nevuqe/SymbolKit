import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgColorPicker(
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
        d="M7 13.161l5.464-5.464a1 1 0 011.415 0l2.12 2.12a1 1 0 010 1.415l-1.928 1.929m-7.071 0l-2.172 2.172a.999.999 0 00-.218.327l-1.028 2.496c-.508 1.233.725 2.466 1.958 1.959l2.497-1.028c.122-.05.233-.125.326-.218l5.708-5.708m-7.071 0h7.071M13.878 3.454l2.121 2.121m0 0l1.414-1.414a1 1 0 011.415 0l.707.707a1 1 0 010 1.414L18.12 7.697m-2.122-2.122l2.122 2.122m2.121 2.12l-2.121-2.12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgColorPicker);
export default ForwardRef;
