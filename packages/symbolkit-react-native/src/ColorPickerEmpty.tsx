import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgColorPickerEmpty(
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
        d="M13.879 7.697L16 9.817a1 1 0 010 1.415L8.363 18.87a1.001 1.001 0 01-.326.218L5.54 20.114c-1.233.508-2.466-.725-1.958-1.958L4.61 15.66a.999.999 0 01.218-.327l7.636-7.636a1 1 0 011.415 0zM13.879 3.454L16 5.575m0 0l1.414-1.414a1 1 0 011.414 0l.708.707a1 1 0 010 1.414L18.12 7.697m-2.12-2.122l2.12 2.122m2.122 2.12l-2.122-2.12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgColorPickerEmpty);
export default ForwardRef;
