import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgEmojiSingRightNote(
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
      <Path d="M20.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="#000" />
      <Path
        d="M20.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 0V3.6a.6.6 0 01.6-.6H23"
        stroke="#000"
        strokeLinecap="round"
      />
      <Path
        d="M16 17a2 2 0 110-4 2 2 0 010 4z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10S6.477 2 12 2c1.422 0 2.775.297 4 .832"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 9a.5.5 0 110-1 .5.5 0 010 1zM15.5 9a.5.5 0 110-1 .5.5 0 010 1z"
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgEmojiSingRightNote);
export default ForwardRef;
