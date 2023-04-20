import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { SymbolKitContext } from "./SymbolKitContext";
function SvgMultiplePagesAdd(
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
        d="M1.992 19h3m3 0h-3m0 0v-3m0 3v3M7 2h8.175c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l2.626 2.626c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963V19"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 22h3.8c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C18 20.48 18 19.92 18 18.8V9.825c0-.489 0-.733-.055-.963-.05-.205-.13-.4-.24-.579-.123-.201-.296-.374-.642-.72l-1.626-1.626c-.346-.346-.519-.519-.72-.642a2.001 2.001 0 00-.579-.24C13.909 5 13.665 5 13.176 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 6.52 3 7.08 3 8.2V13"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5v3.4a.6.6 0 00.6.6H18"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiplePagesAdd);
export default ForwardRef;
