import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgVerifiedUser(
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
        d="M2 20v-1a7 7 0 017-7"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.804 12.313a1.618 1.618 0 012.392 0c.325.357.79.55 1.272.527a1.618 1.618 0 011.692 1.692c-.023.481.17.947.526 1.272.705.641.705 1.75 0 2.392-.356.324-.549.79-.526 1.272a1.618 1.618 0 01-1.692 1.692 1.618 1.618 0 00-1.272.526 1.618 1.618 0 01-2.392 0 1.618 1.618 0 00-1.272-.526 1.618 1.618 0 01-1.692-1.692 1.618 1.618 0 00-.527-1.272 1.618 1.618 0 010-2.392c.357-.325.55-.79.527-1.272a1.618 1.618 0 011.692-1.692c.481.023.947-.17 1.272-.527z"
        stroke="#000"
      />
      <Path
        d="M15.364 17l1.09 1.091 2.182-2.182M9 12a4 4 0 100-8 4 4 0 000 8z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgVerifiedUser);
export default ForwardRef;
