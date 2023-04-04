import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgRewind(
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
        d="M21.044 5.704a.6.6 0 01.956.484v11.625a.6.6 0 01-.956.483l-7.889-5.813a.6.6 0 010-.966l7.89-5.813zM10.044 5.704a.6.6 0 01.956.484v11.625a.6.6 0 01-.956.483l-7.888-5.813a.6.6 0 010-.966l7.888-5.813z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgRewind);
export default ForwardRef;
