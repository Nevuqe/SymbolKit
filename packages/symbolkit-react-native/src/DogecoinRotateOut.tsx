import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgDogecoinRotateOut(
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
        d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 8h3.4a.6.6 0 00.6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.05 16h-3.4a.6.6 0 00-.6.6V20"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 16.402V7.598c0-.331.268-.599.6-.604 2.49-.035 5.9-.072 5.9 5.006s-3.41 5.042-5.9 5.006a.606.606 0 01-.6-.604z"
        stroke="#000"
      />
      <Path
        d="M8 12h4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgDogecoinRotateOut);
export default ForwardRef;
