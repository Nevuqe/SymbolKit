import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgVerifiedBadge(
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
        d="M11.528 1.6a.6.6 0 01.944 0l1.809 2.3a.6.6 0 00.635.207l2.815-.798a.6.6 0 01.764.554l.11 2.925a.6.6 0 00.393.54l2.747 1.01a.6.6 0 01.292.897l-1.63 2.431a.6.6 0 000 .668l1.63 2.431a.6.6 0 01-.292.897l-2.747 1.01a.6.6 0 00-.392.54l-.111 2.925a.6.6 0 01-.764.554l-2.815-.798a.6.6 0 00-.636.207l-1.808 2.3a.6.6 0 01-.944 0L9.72 20.1a.6.6 0 00-.635-.207l-2.815.798a.6.6 0 01-.764-.554l-.11-2.925a.6.6 0 00-.393-.54l-2.747-1.01a.6.6 0 01-.292-.897l1.63-2.43a.6.6 0 000-.669l-1.63-2.431a.6.6 0 01.292-.897l2.747-1.01a.6.6 0 00.392-.54l.111-2.925a.6.6 0 01.764-.554l2.815.798a.6.6 0 00.635-.206L11.53 1.6z"
        stroke="#000"
      />
      <Path
        d="M9 12l2 2 4-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgVerifiedBadge);
export default ForwardRef;
